import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { CarriageInput } from '../../index.js'

storiesOf('CarriageInput', module)
  .add('style', () => (
    <CarriageInput
      style={{ border: '1px solid #aaa', width: '10em' }}
      onChange={action('change')}
    />
  ))
  .add('fontSize', () => (
    <CarriageInput
      style={{ border: '1px solid #aaa', width: '10em' }}
      fontSize="xx-large"
      onChange={action('change')}
    />
  ))
  .add('pattern="^\d+$"', () => (
    <CarriageInput
      style={{ border: '1px solid #aaa', width: '10em' }}
      fontSize="xx-large"
      pattern="^\d+$"
      onChange={action('change')}
    />
  ))
  .add('placeholder', () => (
    <CarriageInput
      style={{ border: '1px solid #aaa', width: '10em' }}
      fontSize="xx-large"
      placeholder="hello, world!"
      onChange={action('change')}
    />
  ))
