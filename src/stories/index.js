const React = require('react')
const { storiesOf, action } = require('@kadira/storybook')

const { CarriageInput } = require('../../index.js')

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
      fontSize='xx-large'
      onChange={action('change')}
    />
  ))
  .add('placeholder', () => (
    <CarriageInput
      style={{ border: '1px solid #aaa', width: '10em' }}
      fontSize='xx-large'
      placeholder='hello, world!'
      onChange={action('change')}
    />
  ))
