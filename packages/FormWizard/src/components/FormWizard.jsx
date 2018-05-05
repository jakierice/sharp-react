import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormContextProvider } from './FormContext';
import FormWizardHeader from './FormWizardHeader';
import FormWizardBody from './FormWizardBody';
import FormWizardFooter from './FormWizardFooter';
import FormWizardReview from './FormWizardReview';

const FormContainer = styled.div`
  border: 1px solid gray;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 3fr 1fr;
  max-width: 80rem;
  padding: 1.2rem;
`;

class FormWizard extends React.Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
  };

  state = {
    activeStep: 0,
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

  navigatePrevious = () => {
    if (this.state.activeStep > 0) {
      this.setState(prevState => ({ activeStep: prevState.activeStep - 1 }));
    }
  };

  navigateNext = () => {
    const stepCount = this.props.children.length;

    if (this.state.activeStep < stepCount - 1) {
      this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  renderSteps = ({ onSubmit }) =>
    React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        active: index === this.state.activeStep,
        onChange: e => this.handleChange(e),
        onSubmit,
      }));

  renderStepTitles() {
    return React.Children.map(this.props.children, child => <h5>{child.props.title}</h5>);
  }
  renderReview = () => {
    return this.props.showReview ? <FormWizardReview /> : null;
  };

  render() {
    return (
      <FormContextProvider value={this.state}>
        <FormContainer>
          <FormWizardHeader>{this.renderStepTitles()}</FormWizardHeader>
          <FormWizardBody>{form => this.renderSteps(form)}</FormWizardBody>
          <FormWizardFooter
            disableButton={this.disableButton}
            navigateNext={this.navigateNext}
            navigatePrevious={this.navigatePrevious}
          />
        </FormContainer>
        {this.renderReview()}
      </FormContextProvider>
    );
  }
}

export default FormWizard;
