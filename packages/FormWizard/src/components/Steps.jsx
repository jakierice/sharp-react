import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormWizardConsumer } from './FormWizardContext';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const StepsContainer = styled.form`
  border: 1px solid gray;
  padding: 1.2rem;
`;

const Steps = props => (
  <FormWizardConsumer>
    {({ actions, activeStep }) => (
      <StepsContainer>
        {React.Children.map(
          props.children,
          (child, index) =>
            child.type.name === 'Step' &&
            React.cloneElement(child, {
              active: index === activeStep,
              onChange: e => actions.handleChange(e),
              // onSubmit: actions.onSubmit,
            }),
        )}
      </StepsContainer>
    )}
  </FormWizardConsumer>
);

Steps.propTypes = propTypes;

export default Steps;
