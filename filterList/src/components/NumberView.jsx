import React from 'react';

const NumberView = ({ count, color, index }) => {
  
  let viewStyle = {
    backgroundColor: color,
    display: 'inline-block',
    width: '150px',
    height: '150px',
    lineHeight: '150px',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
  }
  
  return (
    <div style={viewStyle}>
      {count}
    </div>
  );
}



export default NumberView;