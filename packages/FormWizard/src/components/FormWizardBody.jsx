import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  render() {
    return <BodyContainer>{this.props.children(this)}</BodyContainer>;
  }
}

export default FormWizardBody;
