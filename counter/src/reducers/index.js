import * as types from '../actions/ActionTypes';

const intialState = {
  counters: [
    {
      number: 0,
      color: 'pink',
    },
    {
      number: 0,
      color: 'blue',
    },
    {
      number: 0,
      color: 'green',
    }
  ]
};

function reducers(state = intialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return {
        counters: [
          ...state.counters.slice(0, action.index),
          {
            ...state.counters[action.index],
            number: state.counters[action.index].number + 1,
          },
          ...state.counters.slice(action.index + 1, state.counters.length)
        ]
      };

    case types.DECREMENT:
      return {
        counters: [
          ...state.counters.slice(0, action.index),
          {
            ...state.counters[action.index],
            number: state.counters[action.index].number - 1,
          },
          ...state.counters.slice(action.index + 1, state.counters.length)
        ]
      };

    case types.SET_COLOR:
      return {
        counters: [
          ...state.counters.slice(0, action.index),
          {
            ...state.counters[action.index],
            color: action.color
          },
          ...state.counters.slice(action.index + 1, state.counters.length)
        ]
      }

    case types.CREATE:
      return {
        counters: [
          ...state.counters,
          {
            color: action.color,
            number: 0,
          }
        ]
      };

    case types.REMOVE:
      return {
        counters: [
          ...state.counters.slice(0, state.counters.length - 1)
        ]
      };
    
    default:
      return state;
  }
}

export default reducers;