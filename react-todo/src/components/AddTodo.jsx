import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  render() {
    return (
      <div>   
        <input 
          type='text' 
          ref={ref => this.input = ref} 
        />
        <button 
          onClick={e => this.handleClick(e)}
        >
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.input;
    const text = node.value.trim();

    this.props.onAddClick(text);
    node.value = "";
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

export default AddTodo;