import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import FormWizard, { Step, FormValues } from '.';

storiesOf('FormWizard', module).add('Basic', () => (
  <div>
    <FormWizard>
      <Step title="Step One">
        <input name="name" />
      </Step>
      <Step title="Step Two">
        <input name="age" />
        <input name="occupation" />
      </Step>
      <Step title="Step Three">
        <FormValues>
          {values => (
            <Fragment>
              <h1>{values.name}</h1>
              <ul>
                <li>Age: {values.age}</li>
                <li>Occupation: {values.occupation}</li>
              </ul>
            </Fragment>
          )}
        </FormValues>
      </Step>
    </FormWizard>
  </div>
));
