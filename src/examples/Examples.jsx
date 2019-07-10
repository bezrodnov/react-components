import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ScrollContext from './ScrollContext';
import ProgressGraphExample from './ProgressGraphExample';

import './Examples.scss';

class Examples extends Component {
  state = {
    scrollPos: 0,
  };

  onScroll = e => {
    this.setState({ scrollPos: e.target.scrollTop });
  };

  render() {
    return (
      <div className="examples">
        <Scrollbars className="container" onScroll={this.onScroll}>
          <ScrollContext.Provider value={this.state}>
            <ProgressGraphExample />
            <div style={{ height: 3000 }} />
          </ScrollContext.Provider>
        </Scrollbars>
      </div>
    );
  }
}

export default Examples;
