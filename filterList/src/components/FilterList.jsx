import React, { Component } from 'react';

const FilterList = ({ items, filterBy }) => {
  return (
    <div>
       {
        items.filter((by) => by.indexOf(filterBy) > -1)
             .map((item, idx) => <li key={idx}>{item}</li>)
      }
    </div>
  );
}

export default FilterList;