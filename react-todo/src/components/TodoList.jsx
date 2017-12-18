import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo
            {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  }))
};

TodoList.defaultProps = {
  todos: [],
}


export default TodoList;