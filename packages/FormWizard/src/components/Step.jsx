import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.form`
  display: ${props => (props.active ? 'flex' : 'none')};
`;

const Step = ({
  active, children, onChange, onSubmit
}) => (
  <StepContainer active={active} onChange={onChange} onSubmit={onSubmit}>
    {children}
  </StepContainer>
);

export default Step;
