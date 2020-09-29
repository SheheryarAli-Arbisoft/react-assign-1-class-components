import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm';
import VideosList from './VideosList';

import Heading from '../components/Heading';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Heading>
          <i class='fab fa-youtube'></i> Youtube Video Player
        </Heading>
        <SearchForm />
        <VideosList />
      </Fragment>
    );
  }
}

export default Home;
