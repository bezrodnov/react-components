import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ProgressGraphExample from './ProgressGraphExample';

import './Examples.scss';

class Examples extends Component {
  render() {
    return (
      <Scrollbars>
        <div className="examples">
          <ProgressGraphExample />
        </div>
      </Scrollbars>
    );
  }
}

export default Examples;
