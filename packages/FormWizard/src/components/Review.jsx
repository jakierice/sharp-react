import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormWizardConsumer } from './FormWizardContext';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const ReviewContainer = styled.div`
  border: 2px solid gray;
  /* grid-column: 1; */
  grid-row: 1/4;
`;

const Review = props => (
  <ReviewContainer>
    <FormWizardConsumer>{({ values }) => props.children(values)}</FormWizardConsumer>
  </ReviewContainer>
);

Review.propTypes = propTypes;

export default Review;
