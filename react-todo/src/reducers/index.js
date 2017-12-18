import { combineReducers } from 'redux';
import { VisibilityFilters } from '../actions/actions';
import { SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from '../actions/actions';
const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO :
      return [...state, {
        text: action.text,
        completed: false,
      }]
    
    case COMPLETE_TODO : 
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),

        ...state.slice(0, action.index + 1),
      ];
      
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER :
      return action.filter;

    default:
      return state;
  }
}

// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;