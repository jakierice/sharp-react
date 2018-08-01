import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IncrementDecrement extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    decrementBy: PropTypes.number,
    incrementBy: PropTypes.number,
    initialValue: PropTypes.number,
    upperLimit: PropTypes.number,
    lowerLimit: PropTypes.number,
  };

  static defaultProps = {
    decrementBy: 1,
    incrementBy: 1,
    initialValue: 0,
    upperLimit: null,
    lowerLimit: 0,
  };

  state = {
    current: this.props.initialValue,
  };

  increment = () => {
    this.setState((prevState) => {
      if (prevState.current !== this.props.upperLimit) {
        return {
          current: prevState.current + this.props.incrementBy,
        };
      }
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.current !== this.props.lowerLimit) {
        return {
          current: prevState.current - this.props.decrementBy,
        };
      }
    });
  };

  render() {
    return this.props.children({
      current: this.state.current,
      decrement: this.decrement,
      increment: this.increment,
    });
  }
}

export default IncrementDecrement;
