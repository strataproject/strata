import React from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id';

const Dots = ({id = 'default', style = {}, fill = '#545454', radius = 1, size = 10 }) => {
  return (
    <svg style={style}>
      <defs>
        <pattern id={`dots-pattern-${id}`} patternUnits="userSpaceOnUse" width={size} height={size}>
          <circle cx={size/2} cy={size/2} r={radius} fill={fill} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" style={{ fill: `url(#dots-pattern-${id})` }} />
    </svg>
  )
}

const DiagonalLines = ({id = 'default', style = {}, fill = '#545454', strokeWidth = 2}) => {
  return (
    <svg style={style}>
      <defs>
        <pattern patternTransform="rotate(-45)" id={`diagonal-${id}`} patternUnits="userSpaceOnUse" width="10" height="10">
          <line x1='0' y1='0' x2='16' y2='0' strokeLinecap="square" stroke={fill} strokeWidth={strokeWidth} />
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
    const { style, fill, name, radius, strokeWidth, size } = this.props
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
      <PatternElement style={style} fill={fill} id={id} size={size} radius={radius} strokeWidth={strokeWidth} />
    )
  }
}

PatternBox.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
}

export default PatternBox
