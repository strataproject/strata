import React from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id';

const Dots = ({id = 'default', style = {}, fill = '#545454'}) => {
  return (
    <svg style={style}>
      <defs>
        <pattern id={`tictactoe-${id}`} patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="1" cy="1" r="1" fill={fill} />
          <rect width='10' height='10' fill='#fff0' />
        </pattern>
      </defs>
      <rect width="100%" height="100%" style={{ fill: `url(#tictactoe-${id})` }} />
    </svg>
  )
}

const DiagonalLines = ({id = 'default', style = {}, fill = '#545454'}) => {
  return (
    <svg style={style}>
      <defs>
        <pattern patternTransform="rotate(-45)" id={`diagonal-${id}`} patternUnits="userSpaceOnUse" width="10" height="10">
          <line x1='0' y1='0' x2='16' y2='0' strokeLinecap="square" stroke={fill} strokeWidth="2" />
          <rect width='10' height='10' fill='#fff0' />
        </pattern>
      </defs>
      <rect width="100%" height="100%" style={{ fill: `url(#diagonal-${id})` }} />
    </svg>
  )
}

class PatternBox extends React.Component {
  constructor () {
    super()
    uniqueId.enableUniqueIds(this)
  }
  render () {
    const { style, fill, name } = this.props
    const id = this.nextUniqueId()
    let PatternElement = null
    switch(name) {
      case 'dots':
        PatternElement = Dots
        break;
      case 'diagonal':
        PatternElement = DiagonalLines
        break;
      default:
        PatternElement = Dots
        break;
    }
    return (
      <PatternElement style={style} fill={fill} id={id} />
    )
  }
}

PatternBox.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
}

export default PatternBox
