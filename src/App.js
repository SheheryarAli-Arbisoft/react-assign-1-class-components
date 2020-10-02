import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './views/Navbar';
import SearchForm from './views/SearchForm';
import VideosList from './views/VideosList';
import VideoPlayer from './views/VideoPlayer';

import Container from './components/Container';
import Heading from './components/Heading';

import store from './store';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      /* eslint-disable react/jsx-filename-extension */
      <Provider store={store}>
        <Router>
          <Navbar />
          <Container>
            <Heading>
              <i className='fab fa-youtube' />
              Youtube Video Player
            </Heading>
            <SearchForm />
            <Switch>
              <Route exact path='/' component={VideosList} />
              <Route exact path='/:id' component={VideoPlayer} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
