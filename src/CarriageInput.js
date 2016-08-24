const React = require('react')
const { Component, PropTypes } = React

const commonStyles = {
  boxSizing: 'border-box',
  fontFamily: 'monospace'
}

const divStyles = Object.assign({
  commonStyles,
  border: '1px solid #eee',
  cursor: 'text',
  overflow: 'hidden'
}, commonStyles)

const inputStyles = Object.assign({
  border: 0,
  left: 0,
  paddingLeft: '50%',
  paddingRight: '50%',
  position: 'relative',
  width: '200%'
}, commonStyles)

function getInputStyles ({ selectionEnd, value }) {
  return Object.assign({}, inputStyles, {
    left: (-1 * selectionEnd) + 'ch',
    width: `calc(200% + ${value.length}ch)`
  })
}

class CarriageInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectionEnd: 0,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCursor = this.handleCursor.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })

    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(event)
    }
  }

  handleCursor (event) {
    this.setState({
      selectionEnd: event.target.selectionEnd || 0
    })
  }

  render () {
    const { style, fontSize, onChange, value } = this.props
    return (
      <div
        style={Object.assign({
          fontSize
        }, divStyles, style)}
      >
        <input
          onChange={this.handleChange}
          onClick={this.handleCursor}
          onKeyUp={this.handleCursor}
          style={Object.assign({
            fontSize
          }, getInputStyles(this.state))}
          type='text'
          value={value}
        />
      </div>
    )
  }
}

CarriageInput.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string
}

module.exports = CarriageInput
