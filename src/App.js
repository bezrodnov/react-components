import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigator from './components/Navigator';
import Examples from './examples/Examples';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigator />
          <Examples />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
