import React from 'react'
import PropTypes from 'prop-types'

const PatternBox = ({ style, fill = '#545454' }) => {
  return (
    <svg style={style}>
      <defs>
        <pattern id="tictactoe"patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="1" cy="1" r="1" fill="#000"/>
          <rect width='10' height='10' fill='#fff0' />
        </pattern>
      </defs>
      <rect width="100%" height="100%" style={{ fill: 'url(#tictactoe)' }} />
    </svg>
  )
}

PatternBox.propTypes = {
  style: PropTypes.object.isNotRequired,
  fill: PropTypes.string.isNotRequired,
}

export default PatternBox
