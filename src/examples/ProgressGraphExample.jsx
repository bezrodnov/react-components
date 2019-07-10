import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';

import ScrollMagicContext from '../ScrollMagicContext';
import ProgressGraph from '../components/ProgressGraph';

class ProgressGraphExample extends Component {
  state = { currentStep: 0 };

  componentDidMount() {
    this.direction = 1;
    setInterval(() => {
      this.setState({ currentStep: this.state.currentStep + this.direction });
      if (this.state.currentStep === 3) {
        this.direction = -1;
      } else if (this.state.currentStep === 0) {
        this.direction = 1;
      }
    }, 1000);
  }

  componentDidUpdate() {
    if (this.context && !this.scene) {
      // this.scene = new ScrollMagic.Scene({ triggerElement: '#progress-graph-example' })
      //   .setPin('#progress-graph', { pushFollowers: false })
      //   .addTo(this.context);
    }
  }

  render() {
    const { currentStep } = this.state;
    return (
      <div
        id="progress-graph-example"
        className="progress-graph-example"
        style={
          {
            /*height: 3000*/
          }
        }
      >
        <div id="progress-graph">
          <ProgressGraph
            currentStep={currentStep}
            steps={[
              {
                title: 'First step',
                subtitle: 'subtitle',
                estimate: '15 - 20 min',
              },
              {
                title: 'Second step',
                subtitle: 'subtitle',
                estimate: '5 - 10 min',
              },
              {
                title: 'Third step',
                subtitle: 'subtitle',
                estimate: '20 - 25 min',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

ProgressGraphExample.contextType = ScrollMagicContext;

export default ProgressGraphExample;
