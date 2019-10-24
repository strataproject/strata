import React from 'react'
import PropTypes from 'prop-types'
import YellowCircle from '../../images/circle-yellow.svg'
import PinkCircle from '../../images/circle-pink.svg'
import BlueCircle from '../../images/circle-blue.svg'
import { motion } from 'framer-motion'

const CircleIcon = ({ scale, blendMode, opacity }) => (
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
          <PinkCircle style={{ mixBlendMode: 'multiply', width: '100%' }} />
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
        <YellowCircle style={{ mixBlendMode: 'multiply', width: '100%' }} />
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
        <BlueCircle style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
  </div>
)

CircleIcon.propTypes = {
  scale: PropTypes.number,
  blendMode: PropTypes.string,
  opacity: PropTypes.number,
}

export default CircleIcon
