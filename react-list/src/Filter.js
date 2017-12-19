import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
// import Counter from './Counter';
import SearchInput from './components/SearchInput';
import FilterList from './components/FilterList';


class Filter extends Component {
  render() {
    const items = ['ReactJS', 'VueJs', 'AngularJS', 'EmverJS', 'WordPress'];

    return (
      <div>
        <SearchInput
          onChangeFilter={this.props.onChangeFilter}
        />
        <FilterList 
          filterBy={this.props.filterBy}
          items={items}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterBy: state.filterBy,
});

const mapDistaptchToProps = (dispatch) => ({
  onChangeFilter: (filter) => { dispatch(actions.changeFilter(filter)) }
});

export default connect(
  mapStateToProps,
  mapDistaptchToProps
)(Filter);