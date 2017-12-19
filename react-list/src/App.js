import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from './actions';
import Counter from './Counter';
import Filter from './Filter';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     filterBy: '',
  //   };
  // }

  render() {
    
    return (
      <div>
        <Counter/>
        <br/><br/><br/>
        <Filter/>
        <br/><br/><br/>
        <div>
          test
        </div>
      </div>
    );
  }
}

export default App;
