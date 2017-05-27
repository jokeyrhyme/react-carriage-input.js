const React = require('react');
const PropTypes = require('prop-types');
const { Component } = React;

const commonStyles = {
  boxSizing: 'border-box',
  fontFamily: 'monospace'
};

const divStyles = Object.assign(
  {
    commonStyles,
    cursor: 'text',
    overflow: 'hidden'
  },
  commonStyles
);

const inputStyles = Object.assign(
  {
    border: 0,
    left: 0,
    paddingLeft: '50%',
    paddingRight: '50%',
    position: 'relative',
    width: '200%'
  },
  commonStyles
);

function getInputStyles({ selectionEnd, value }) {
  return Object.assign({}, inputStyles, {
    left: -1 * selectionEnd + 'ch',
    width: `calc(200% + ${value.length}ch)`
  });
}

class CarriageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionEnd: 0,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });

    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  handleClick(event) {
    this.updateCursor(event);

    const { onClick } = this.props;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  }

  handleKeyUp(event) {
    this.updateCursor(event);

    const { onKeyUp } = this.props;
    if (typeof onKeyUp === 'function') {
      onKeyUp(event);
    }
  }

  updateCursor(event) {
    this.setState({
      selectionEnd: event.target.selectionEnd || 0
    });
  }

  render() {
    const { style, fontSize, pattern, placeholder, title, value } = this.props;
    return (
      <div
        style={Object.assign(
          {
            fontSize
          },
          divStyles,
          style
        )}
      >
        <input
          onChange={this.handleChange}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          style={Object.assign(
            {
              fontSize
            },
            getInputStyles(this.state)
          )}
          pattern={pattern}
          placeholder={placeholder}
          title={title}
          value={value}
        />
      </div>
    );
  }
}

CarriageInput.propTypes = {
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  style: PropTypes.object,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
};

CarriageInput.defaultProps = {
  pattern: '',
  placeholder: '',
  title: ''
};

module.exports = CarriageInput;
