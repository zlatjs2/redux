import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onSetRandomColor } = this.props;
    const counterList = counters.map((counter, idx) => {
      return <Counter
                {...counter}
                index={idx}
                key={idx}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetRandomColor={onSetRandomColor}
             />
    });

    return (
      <div>
        {counterList}
      </div>
    );
  }
}

export default CounterList;