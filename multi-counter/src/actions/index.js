import * as types from './ActionTypes';

export function increment(index) {
  return {
    type: types.INCREMENT,
    index
  }
}

export function decrement(index) {
  return {
    type: types.DECREMENT,
    index
  }
}

export function setColor(index, color) {
  return {
    type: types.SET_COLOR,
    index,
    color
  }
}

export function create(color) {
  return {
    type: types.CREATE,
    color
  }
}

export function remove(index) {
  return {
    type: types.REMOVE,
    index,
  }
}