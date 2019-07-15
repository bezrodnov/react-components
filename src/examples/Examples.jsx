import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route } from 'react-router-dom';

import ProgressGraphExample from './progressGraph/ProgressGraphExample';

import './Examples.scss';
import PlainMenuExample from './plainMenu/PlainMenuExample';

class Examples extends Component {
  render() {
    return (
      <div className="examples">
        <Scrollbars className="container">
          <Route exact path="/progressGraph" component={ProgressGraphExample} />
          <Route exact path="/plainMenu" component={PlainMenuExample} />
        </Scrollbars>
      </div>
    );
  }
}

export default Examples;
