import React, { Component } from 'react';
import PlainMenu from '../../components/plainMenu/PlainMenu';

import './PlainMenuExample.scss';

class PlainMenuExample extends Component {
  state = {
    menu: [{
      name: 'single',
      text: 'Single Player',
      menu: [
        { name: 'campaign', text: 'Campaign' },
        { name: 'scirmish', text: 'Scrimish' },
        { name: 'sandbox', text: 'Sandbox' },
      ],
    }, {
      name: 'multi',
      text: 'Multi Player',
      menu: [
        { name: 'lan', text: 'Lan' },
        { name: 'hotseat', text: 'Hotseat' },
      ],
    }, {
      name: 'credits',
      text: 'Credits',
    }],
  }

  render() {
    return (
      <div className="plain-menu-example">
        <PlainMenu menu={this.state.menu} />
      </div>
    );
  }
}

export default PlainMenuExample;