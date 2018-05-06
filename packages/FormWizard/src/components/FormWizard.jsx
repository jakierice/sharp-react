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
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    onSubmit: PropTypes.func.isRequired,
  };

  static Header = Header;
  static Steps = Steps;
  static Step = Step;
  static Footer = Footer;
  static Review = Review;

  state = {
    activeStep: 0,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  navigateNext = () => {
    const stepCount = this.props.children.length;

    if (this.state.activeStep < stepCount - 1) {
      this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
    }
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
        <FormWizardProvider value={wizard}>
          {this.props.children}
        </FormWizardProvider>
      </WizardLayout>
    );
  }
}

export default FormWizard;
