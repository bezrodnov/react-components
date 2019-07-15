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
      if (props[propName] > props.steps.length + 1) {
        return new Error('"currentStep" should not be greater than total step count + 1');
      }
    },
  };

  /**
   * previous step value which is used to calculate transition durations and delays
   * @private
   */
  previousStep = 0;

  componentDidUpdate(prevProps) {
    this.previousStep = this.props.currentStep || 0;
  }

  get progressLineDiff() {
    return Math.abs((this.props.currentStep || 1) - (this.previousStep || 1));
  }

  getStepNoTransitionDelay(index) {
    if (this.props.currentStep > this.previousStep) {
      if (index > this.previousStep && index <= this.props.currentStep) {
        return (index - this.previousStep) * TRANSITION_DURATION + 's';
      }
    } else if (this.props.currentStep < this.previousStep) {
      if (index >= this.props.currentStep && index < this.previousStep) {
        return (this.previousStep - index - 1) * TRANSITION_DURATION + 's';
      }
    }
    return '0s';
  }

  render() {
    const { steps, currentStep, className, ...other } = this.props;
    return (
      <div className={`progress-graph ${className || ''}`} {...other}>
        {steps.map((step, index) => (
          <div key={index} className={`step ${index < currentStep - 1 ? 'completed' : index === currentStep - 1 ? 'current' : ''}`}>
            <div className="progress-diagram">
              <span className="step-label">{step.label}</span>
              <span
                className="step-no"
                style={{ transitionDelay: this.getStepNoTransitionDelay(index) }}
              >
                {index + 1}
                <span
                  className="completed-icon fas fa-check"
                  style={{ transitionDelay: this.getStepNoTransitionDelay(index) }}
                />
              </span>
            </div>
            <div className="description">
              <div className="title">{step.title}</div>
              <div className="subtitle">{step.subtitle}</div>
            </div>
            <div className="estimate">{step.estimate}</div>
          </div>
        ))}
        <div
          className="progress-line"
          style={{
            height: currentStep > 1 ? Math.min(currentStep - 1, steps.length - 1) * 100 : 0,
            transitionDuration: this.progressLineDiff * TRANSITION_DURATION + 's',
          }}
        />
        <div className="progress-bar" />
      </div>
    );
  }
}

const TRANSITION_DURATION = 0.5;

export default ProgressGraph;
