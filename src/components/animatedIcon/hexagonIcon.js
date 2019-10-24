import React from 'react'
import PropTypes from 'prop-types'
import PinkHexagon from '../../images/hexagon-pink.svg'
import YellowHexagon from '../../images/hexagon-yellow.svg'
import BlueHexagon from '../../images/hexagon-blue.svg'
import { motion } from 'framer-motion'

const HexagonIcon = ({ scale, blendMode, opacity }) => (
  <div style={{ position: 'relative' }}>
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
      <motion.div style={{ transform: `translateY(${scale}px)` }}>
        <motion.div
          initial={{ rotate: '0deg' }}
          animate={{ rotate: '360deg' }}
          transition={{ ease: 'easeInOut', duration: 4, loop: Infinity }}
          style={{ originX: '49%', originY: '49%', width: '100%' }}
        >
          <PinkHexagon style={{ mixBlendMode: 'multiply', width: '100%' }} />
        </motion.div>
      </motion.div>
    </div>
    <div
      style={{
        mixBlendMode: blendMode,
        opacity: opacity,
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        top: '24px',
        left: '15px',
      }}
    >
      <motion.div
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '360deg' }}
        transition={{ ease: 'easeInOut', duration: 5, loop: Infinity }}
        style={{ originX: '49%', originY: '49%', width: '100%' }}
      >
        <YellowHexagon style={{ mixBlendMode: 'multiply', width: '100%' }} />
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
        left: '30px',
      }}
    >
      <motion.div
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '360deg' }}
        transition={{ ease: 'easeInOut', duration: 6, loop: Infinity }}
        style={{ originX: '49%', originY: '49%', width: '100%' }}
      >
        <BlueHexagon style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
  </div>
)

HexagonIcon.propTypes = {
  scale: PropTypes.number,
  blendMode: PropTypes.string,
  opacity: PropTypes.number,
}

export default HexagonIcon
