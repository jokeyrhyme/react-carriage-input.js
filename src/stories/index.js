import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { CarriageInput } from '../../index.js'

storiesOf('CarriageInput', module)
  .add('defaults', () => (
    <CarriageInput
      divStyle={{ width: '10em' }}
      fontSize="xx-large"
      onChange={action('change')}
    />
  ))
