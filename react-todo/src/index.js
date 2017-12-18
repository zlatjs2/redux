import React from 'react';
import ReactDOM from 'react-dom';
// Redux 관련
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux';


import App from './containers/App';
import './index.css';

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions';

// let store = createStore(todoApp);
let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
