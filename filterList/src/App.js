import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from './actions';
import Counter from './Counter';
import Filter from './Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.onCreate = this.onCreate.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onCreate() {
    console.log('추가');
    
  }
  
  onRemove() {
    console.log('삭제');
  }

  render() {
    
    return (
      <div>
        <Counter/>
        <div>
          <button onClick={this.onCreate}>추가</button>
          <button onClick={this.onRemove}>삭제</button>
        </div>
        <br/><br/><br/>
        <Filter/>
        <br/><br/><br/>
      </div>
    );
  }
}

export default App;
