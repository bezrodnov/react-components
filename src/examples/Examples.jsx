import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ScrollContext from './ScrollContext';
import ProgressGraphExample from './ProgressGraphExample';

import './Examples.scss';

class Examples extends Component {
  render() {
    return (
      <div className="examples">
        <Scrollbars className="container">
          <ScrollContext.Provider value={this.state}>
            <ProgressGraphExample />
          </ScrollContext.Provider>
        </Scrollbars>
      </div>
    );
  }
}

export default Examples;
