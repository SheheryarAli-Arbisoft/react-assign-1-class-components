import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import VideoPlayer from './views/VideoPlayer';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:id' component={VideoPlayer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
