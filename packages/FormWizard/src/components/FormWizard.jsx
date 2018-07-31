import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormWizardProvider } from './FormWizardContext';
import Header from './Header';
import Steps from './Steps';
import Step from './Step';
import Footer from './Footer';
import Review from './Review';

const WizardLayout = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr minmax(20rem, 50vh) 1fr;
  padding: 1.2rem;
`;

class FormWizard extends React.Component {
  static Header = Header;
  static Steps = Steps;
  static Step = Step;
  static Footer = Footer;
  static Review = Review;

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  state = {
    activeStep: 0,
  };

  handleChange = (e) => {
    const {
      name, value, type, checked,
    } = e.target;

    this.setState(() => {
      if (type === 'checkbox') {
        return { [name]: checked };
      }

      return { [name]: value };
    });
  };

  navigateNext = () => {
    React.Children.forEach(this.props.children, (child) => {
      if (child.type.name === 'Steps') {
        const stepCount = React.Children.count(child.props.children);
        this.setState((prevState) => {
          if (prevState.activeStep <= stepCount - 1) {
            return { activeStep: prevState.activeStep + 1 };
          }
        });
      }
    });
  };

  navigatePrevious = () => {
    if (this.state.activeStep > 0) {
      this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
    }
  };

  disableButton = (button) => {
    const { activeStep } = this.state;
    const stepCount = this.props.children.length;

    switch (button) {
      case 'previous':
        return activeStep === 0;
      case 'next':
        return activeStep === stepCount - 1;
      default:
        return false;
    }
  };

  render() {
    const wizard = {
      actions: {
        navigateNext: this.navigateNext,
        navigatePrevious: this.navigatePrevious,
        disableButton: this.disableButton,
        handleChange: this.handleChange,
        onSubmit: this.props.onSubmit,
      },
      values: this.state,
      activeStep: this.state.activeStep,
    };
    return (
      <WizardLayout>
        <FormWizardProvider value={wizard}>{this.props.children}</FormWizardProvider>
      </WizardLayout>
    );
  }
}

export default FormWizard;
