import React, { Component } from 'react';

class Buttons extends Component {
  setRandomColor() {

    let colors = ['#fff4e6', '#fff4e6', '#fff4e6', 'yellow', 'green', 'blue'];
    let idx = Math.floor(Math.random() * colors.length);

    this.props.onCreate(colors[idx])
  }

  render() {
    const { onCreate, onRemove } = this.props;

    return (
      <div>
        <button onClick={this.setRandomColor.bind(this)}>생성</button>
        <button onClick={onRemove}>제거</button>
      </div>
    );
  }
}

export default Buttons;