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
        <label htmlFor="name">Name</label>
        <input name="name" id="name" />
      </FormWizard.Step>
      <FormWizard.Step>
        <input name="age" />
        <input name="occupation" />
      </FormWizard.Step>
      <FormWizard.Step>
        <h3>Step Three</h3>
      </FormWizard.Step>
    </FormWizard.Steps>
    <FormWizard.Footer />{' '}
    <FormWizard.Review>
      {values => (
        <Fragment>
          <h1>Name: {values.name}</h1>
          <p>Age: {values.age}</p>
          <p>Job: {values.occupation}</p>
        </Fragment>
      )}
    </FormWizard.Review>
  </FormWizard>
));
