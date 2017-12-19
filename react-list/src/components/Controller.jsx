import React, { Component } from 'react';

class Controller extends Component {
  
  setRandomColor() {
    let colors = ['#fff4e6', '#fff4e6', '#fff4e6', 'yellow', 'green', 'blue'];
    let idx = Math.floor(Math.random() * colors.length);

    this.props.onSetColor(colors[idx])
  }
  
  render() {
    const { onIncrement, onDecrement, onSetColor } = this.props;

    return (
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.setRandomColor.bind(this)}>randomCOlor</button>
      </div>
    );
  }
}

export default Controller;