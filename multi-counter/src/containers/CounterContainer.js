import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CounterList from '../components/CounterList';

class CounterContainer extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onSetRandomColor } = this.props;
    return (
      <div>
        <CounterList 
          counters={counters} 
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onSetRandomColor={onSetRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => {dispatch(actions.increment(index))},
  onDecrement: (index) => {dispatch(actions.decrement(index))},
  onSetRandomColor: (index, color) => {dispatch(actions.setColor(index, color))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);

