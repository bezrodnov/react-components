import React, { Component } from 'react';
import Prism from 'prismjs';
import '../css/prism.css';

import ProgressGraph from '../components/ProgressGraph';
import ScrollContext from './ScrollContext';

import './ProgressGraphExample.scss';

class ProgressGraphExample extends Component {
  state = {
    currentStep: 1,
    steps: [
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
    ],
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { currentStep, steps } = this.state;
    return (
      <div className="progress-graph-example">
        <ProgressGraph currentStep={currentStep} steps={steps} />
        <div className="mutations">
          <pre>
            <code className="language-javascript">{`currentStep = 0;`}</code>
          </pre>
          <pre>
            <code className="language-javascript">{`currentStep = 1;`}</code>
          </pre>
          <pre>
            <code className="language-javascript">{`currentStep = 2;`}</code>
          </pre>
          <pre>
            <code className="language-javascript">{`currentStep = 3;`}</code>
          </pre>
        </div>
      </div>
    );
  }
}

ProgressGraphExample.contextType = ScrollContext;

export default ProgressGraphExample;
