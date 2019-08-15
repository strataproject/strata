import React from 'react'
import PropTypes from 'prop-types'
import stringify from 'virtual-dom-stringify'
import circles from 'svg-patterns/p/circles'

const PatternBox = ({ children, style, fill = '#545454' }) => {
  const pattern = circles({
    size: 15, // size of the pattern
    radius: 3,
    complement: true,
    fill: fill, // any SVG-compatible color
    strokeWidth: 0,
    stroke: 'none', // any SVG-compatible color
    background: null, // any SVG-compatible color
  })
  return (
    <svg style={style}>
      <defs dangerouslySetInnerHTML={{ __html: stringify(pattern) }}></defs>
      <rect width="100%" height="100%" style={{ fill: pattern.url() }} />
    </svg>
  )
}

PatternBox.propTypes = {
  style: PropTypes.object.isNotRequired,
  fill: PropTypes.string.isNotRequired,
}

export default PatternBox
