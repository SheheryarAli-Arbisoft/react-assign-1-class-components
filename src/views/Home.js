import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm';
import VideosList from './VideosList';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <SearchForm />
        <VideosList />
      </Fragment>
    );
  }
}

export default Home;
