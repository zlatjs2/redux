import * as filterTypes from '../actions/FilterTypes';
import * as counterTypes from '../actions/CounterActions';

const initialState = {
  count: 0,
  color: 'red',
  filterBy: '',
};

function reducers(state = initialState, action) {
  switch(action.type) {
    case counterTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
      
    case counterTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    
    case counterTypes.SET_COLOR:
      return {
        ...state,
        color: action.color,
      }

    case filterTypes.CHANGE_FILTER: 
      return {
        ...state,
        filterBy: action.filter,
      }

    default:
      return state; 
  }
}

export default reducers;