import React, { Component } from 'react';
import Prism from 'prismjs';
import '../../css/prism.css';

import ProgressGraph from '../../components/progressGraph/ProgressGraph';

import './ProgressGraphExample.scss';

class ProgressGraphExample extends Component {
  state = {
    currentStep: 0,
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
    activeCodeEffect: null,
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { currentStep, steps, activeCodeEffect } = this.state;
    return (
      <div className="progress-graph-example">
        <ProgressGraph currentStep={currentStep} steps={steps} />
        <div className="mutations">
          <CodeEffect
            code={`currentStep = 0; // no steps are completed yet `}
            active={activeCodeEffect === 0}
            onActivate={() => {
              this.setState({ currentStep: 0, activeCodeEffect: 0 });
            }}
          />
          <CodeEffect
            code={`currentStep = 1`}
            active={activeCodeEffect === 1}
            onActivate={() => {
              this.setState({ currentStep: 1, activeCodeEffect: 1 });
            }}
          />
          <CodeEffect
            code={`currentStep = 2`}
            active={activeCodeEffect === 2}
            onActivate={() => {
              this.setState({ currentStep: 2, activeCodeEffect: 2 });
            }}
          />
          <CodeEffect
            code={`currentStep = 3`}
            active={activeCodeEffect === 3}
            onActivate={() => {
              this.setState({ currentStep: 3, activeCodeEffect: 3 });
            }}
          />
          <CodeEffect
            code={`currentStep = 4; // all steps are completed`}
            active={activeCodeEffect === 4}
            onActivate={() => {
              this.setState({ currentStep: 4, activeCodeEffect: 4 });
            }}
          />
        </div>
      </div>
    );
  }
}

class CodeEffect extends Component {
  render() {
    return (
      <pre
        onClick={this.props.onActivate}
        tabIndex="0"
        role="button"
        className={`language-javascript ${this.props.active ? 'active' : ''}`}
      >
        <code className="language-javascript">{this.props.code}</code>
      </pre>
    );
  }
}

export default ProgressGraphExample;
