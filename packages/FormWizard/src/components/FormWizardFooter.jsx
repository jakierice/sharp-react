import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const propTypes = {
  disableButton: PropTypes.func.isRequired,
  navigateNext: PropTypes.func.isRequired,
  navigatePrevious: PropTypes.func.isRequired,
};

const FormWizardFooter = ({ disableButton, navigateNext, navigatePrevious }) => (
  <FooterContainer>
    <button onClick={navigatePrevious} disabled={disableButton('previous')}>
      Previous
    </button>
    <button onClick={navigateNext} disabled={disableButton('next')}>
      Next
    </button>
  </FooterContainer>
);

FormWizardFooter.propTypes = propTypes;

export default FormWizardFooter;
