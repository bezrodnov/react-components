import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollMagic from 'scrollmagic';

import Navigator from './components/Navigator';
import ScrollMagicContext from './ScrollMagicContext';
import Examples from './examples/Examples';

import './App.scss';

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      scrollMagicController: new ScrollMagic.Controller(),
    });
  }

  render() {
    return (
      <div className="App">
        <ScrollMagicContext.Provider value={this.state.scrollMagicController}>
          <BrowserRouter>
            <Navigator />
            <Examples />
          </BrowserRouter>
        </ScrollMagicContext.Provider>
      </div>
    );
  }
}

export default App;
