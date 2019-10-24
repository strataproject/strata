import React from 'react'
import PropTypes from 'prop-types'

import HexagonIcon from './hexagonIcon'
import CircleIcon from './circleIcon'
import RhombusIcon from './rhombusIcon'

import ParallaxImage from './parallaxImage'
import { blue, pink } from 'constants/theme'
import { useViewportScroll, useTransform } from 'framer-motion'
import PatternBox from 'components/patternBox'

const AnimatedIcon = ({
  shape,
  patternA = { color: blue },
  patternB = { color: pink },
}) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  let ShapeIcon = CircleIcon

  if (shape == 'rhombus') {
    ShapeIcon = RhombusIcon
  } else if (shape == 'hexagon') {
    ShapeIcon = HexagonIcon
  }

  //let canHandleMixBlendMode = false

  const canHandleMixBlendMode = !(
    typeof window !== 'undefined' &&
    typeof window.getComputedStyle(document.body).mixBlendMode === 'undefined'
  )

  let blendMode = 'multiply'
  let opacity = 1
  if (!canHandleMixBlendMode) {
    blendMode = 'normal'
    opacity = 0.666
  }

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        paddingBottom: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          mixBlendMode: 'multiply',
          position: 'relative',
          padding: '10%',
        }}
      >
        <ShapeIcon scale={scale} opacity={opacity} blendMode={blendMode} />
      </div>
      <ParallaxImage
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '0px',
          width: '33%',
          height: '6rem',
        }}
      >
        <PatternBox
          style={{ width: '100%', height: '6rem' }}
          fill={patternA.color}
        />
      </ParallaxImage>

      <ParallaxImage
        style={{ position: 'absolute', width: '25%', height: '12rem' }}
      >
        <PatternBox
          style={{ width: '100%', height: '12rem' }}
          name="diagonal"
          fill={patternB.color}
        />
      </ParallaxImage>
    </div>
  )
}

AnimatedIcon.propTypes = {
  shape: PropTypes.string,
  patternA: PropTypes.object,
  patternB: PropTypes.object,
}

export default AnimatedIcon
