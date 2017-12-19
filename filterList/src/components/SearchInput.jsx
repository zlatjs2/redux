import React, { Component } from 'react';

class SearchInput extends Component {
  
  handleChange(e) {
    let newFilter = e.target.value;
    this.props.onChangeFilter(newFilter);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default SearchInput;