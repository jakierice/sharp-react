import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormContextProvider } from './FormContext';

const BodyContainer = styled.div`
  padding: 1.2rem 0;
`;

class FormWizardBody extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {};

  onSubmit = (e) => {
    if (e) e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormContextProvider value={this.state}>
        <BodyContainer>{this.props.children(this)}</BodyContainer>
      </FormContextProvider>
    );
  }
}

export default FormWizardBody;
