import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StepContainer = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
`;

const Step = ({
  active, children, onChange, onSubmit,
}) => (
  <StepContainer active={active} onChange={onChange}>
    {children}
  </StepContainer>
);

Step.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Step;
