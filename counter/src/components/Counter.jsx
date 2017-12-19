import React, { Component } from 'react';

class Counter extends Component {

  setRandomColor() {

    let colors = ['#fff4e6', '#fff4e6', '#fff4e6', 'yellow', 'green', 'blue'];
    let idx = Math.floor(Math.random() * colors.length);

    this.props.onSetRandomColor(this.props.index, colors[idx])
  }

  render() {
    const { index, number, color, onIncrement, onDecrement } = this.props;
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
      <div>
        <div style={viewStyle}>{number}</div>
        <button onClick={() => onIncrement(index) }>증가</button>
        <button onClick={() => onDecrement(index)}>감소</button>
        <button onClick={this.setRandomColor.bind(this)}>randomCOlor</button>
      </div>
    );
  }
}

export default Counter;