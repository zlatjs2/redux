import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import NumberView from './components/NumberView';
import Controller from './components/Controller';


class Counter extends Component {
  
  render() {
    const { count, color, onIncrement, onDecrement, onSetColor } = this.props;
    
    return (
      <div>
        <NumberView
          count={count}
          color={color}
        />
        <Controller
          onIncrement={onIncrement}
          onDecrement = {onDecrement}
          onSetColor = {onSetColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  color: state.color,
})

const mapDispatchProps = (dispatch) => ({
  onIncrement: () => { dispatch(actions.increment()) },
  onDecrement: () => { dispatch(actions.decrement()) },
  onSetColor: (color) => { dispatch(actions.setColor(color)) }
})


export default connect(
  mapStateToProps,
  mapDispatchProps
)(Counter);