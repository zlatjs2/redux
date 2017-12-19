import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import CounterContainer from './containers/CounterContainer';
import Buttons from './components/Buttons';

class App extends Component {

  render() {
    const { onCreate, onRemove } = this.props;

    return (
      <div>
        <CounterContainer />
        <Buttons 
          onCreate={onCreate}
          onRemove={onRemove}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreate: (color) => {dispatch(actions.create(color))},
  onRemove: () => {dispatch(actions.remove())},
});

export default connect(
  null,
  mapDispatchToProps
)(App);