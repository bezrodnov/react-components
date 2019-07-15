import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './Navigator.scss';

class Navigator extends Component {
  render() {
    return (
      <div className="navigator">
        <NavLink to="/progressGraph" strict activeClassName="active">
          Progress Graph
        </NavLink>
        <NavLink to="/plainMenu" strict activeClassName="active">
          PlainMenu
        </NavLink>
      </div>
    );
  }
}

export default withRouter(Navigator);
