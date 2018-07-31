import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import FormWizard from '.';

const onSubmitMock = (e) => {
  e.preventDefault();
  console.log(e);
};

storiesOf('FormWizard', module).add('Basic', () => (
  <FormWizard onSubmit={onSubmitMock}>
    <FormWizard.Header>
      <h1>Step One</h1>
      <h1>Step Two</h1>
      <h1>Step Three</h1>
    </FormWizard.Header>
    <FormWizard.Steps>
      <FormWizard.Step>
        <label htmlFor="name">
          Name
          <input name="name" id="name" />
        </label>
      </FormWizard.Step>
      <FormWizard.Step>
        <label htmlFor="age">
          Age
          <input name="age" />
        </label>
        <label htmlFor="occupation">
          Occupation
          <input id="occupation" name="occupation" />
        </label>
      </FormWizard.Step>
      <FormWizard.Step>
        <label htmlFor="marital-status">
          Married?
          <input type="checkbox" name="maritalStatus" />
        </label>
      </FormWizard.Step>
    </FormWizard.Steps>
    <FormWizard.Footer />
    <FormWizard.Review>
      {values => (
        <Fragment>
          <h1>Name: {values.name}</h1>
          <p>Age: {values.age}</p>
          <p>Job: {values.occupation}</p>
          <p>Marital Status: {values.maritalStatus ? 'Married' : 'Single'}</p>
        </Fragment>
      )}
    </FormWizard.Review>
  </FormWizard>
));
