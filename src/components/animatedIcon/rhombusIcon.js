import React from 'react'
import PropTypes from 'prop-types'
import PinkRhombus from '../../images/rhombus-pink.svg'
import YellowRhombus from '../../images/rhombus-yellow.svg'
import BlueRhombus from '../../images/rhombus-blue.svg'
import { motion } from 'framer-motion'

const RhombusIcon = ({ blendMode, opacity }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        mixBlendMode: blendMode,
        opacity: opacity,
        position: 'absolute',
        zIndex: '-1',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
      }}
    >
      <motion.div
        initial={{ translateY: '50%' }}
        animate={{ translateY: '16.666%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 4 }}
      >
        <PinkRhombus style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
    <div
      style={{
        mixBlendMode: blendMode,
        opacity: opacity,
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        top: '0px',
        left: '0px',
      }}
    >
      <motion.div
        initial={{ translateY: '0%' }}
        animate={{ translateY: '33.333%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 5 }}
      >
        <YellowRhombus style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
    <div
      style={{
        mixBlendMode: blendMode,
        opacity: opacity,
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        top: '0px',
        left: '0px',
      }}
    >
      <motion.div
        initial={{ translateY: '66.666%' }}
        animate={{ translateY: '33.333%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 6 }}
      >
        <BlueRhombus style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
  </div>
)

RhombusIcon.propTypes = {
  scale: PropTypes.number,
  blendMode: PropTypes.string,
  opacity: PropTypes.number,
}

export default RhombusIcon
