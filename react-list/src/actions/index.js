import * as filterTypes from './FilterTypes';
import * as counterTypes from './CounterActions';

/* 액션 생성자 */
export function increment() {
  return {
    type: counterTypes.INCREMENT
  }
}

export function decrement() {
  return {
    type: counterTypes.DECREMENT
  }
}

export function setColor(color) {
  return {
    type: counterTypes.SET_COLOR,
    color
  }
}

export function changeFilter(filter) {
  return {
    type: filterTypes.CHANGE_FILTER,
    filter
  }
}