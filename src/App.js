import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './views/Navbar';
import Home from './views/Home';
import VideoPlayer from './views/VideoPlayer';

import Container from './components/Container';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:id' component={VideoPlayer} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
