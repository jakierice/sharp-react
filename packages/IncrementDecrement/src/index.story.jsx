import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import IncrementDecrement from './IncrementDecrement';

storiesOf('IncrementDecrement', module).add('default', () => (
  <IncrementDecrement>
    {({ current, decrement, increment }) => (
      <Fragment>
        <h1>{current}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </Fragment>
    )}
  </IncrementDecrement>
));
