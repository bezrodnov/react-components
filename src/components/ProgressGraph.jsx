import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProgressGraph.scss';

class ProgressGraph extends Component {
  static propTypes = {
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        estimate: PropTypes.any,
        title: PropTypes.any,
        subtitle: PropTypes.any,
        label: PropTypes.any,
      })
    ).isRequired,

    currentStep: (props, propName) => {
      if (props[propName] == null || !Number.isInteger(props[propName]) || props[propName] < 0) {
        return new Error(`"${propName}" should be a non negative integer number`);
      }
      if (props[propName] > props.steps.length) {
        return new Error('"currentStep" should not be greater than total step count');
      }
    },
  };

  render() {
    const { steps, currentStep, className, ...other } = this.props;
    return (
      <div className={`progress-graph ${className || ''}`} {...other}>
        {steps.map((step, index) => (
          <div key={index} className={`step ${currentStep > index ? 'completed' : ''}`}>
            <div className="progress-diagram">
              <span className="step-label">{step.label}</span>
              <span className="step-no">{index + 1}</span>
            </div>
            <div className="description">
              <div className="title">{step.title}</div>
              <div className="subtitle">{step.subtitle}</div>
            </div>
            <div className="estimate">{step.estimate}</div>
          </div>
        ))}
        <div className="progress-line" style={{ height: (currentStep - 1) * 100 }} />
      </div>
    );
  }
}

export default ProgressGraph;
