import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FormWizardConsumer } from './FormWizardContext';

const FooterContainer = styled.div`
  align-items: center;
  border: 1px solid gray;
  display: flex;
  /* grid-column: 2; */
  justify-content: flex-end;
`;

const Footer = () => (
  <FooterContainer>
    <FormWizardConsumer>
      {({ actions }) => (
        <Fragment>
          <button onClick={actions.navigatePrevious} disabled={actions.disableButton('previous')}>
            Previous
          </button>
          <button onClick={actions.navigateNext} disabled={actions.disableButton('next')}>
            Next
          </button>
        </Fragment>
      )}
    </FormWizardConsumer>
  </FooterContainer>
);

export default Footer;
