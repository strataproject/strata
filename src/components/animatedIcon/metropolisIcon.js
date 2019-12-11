import React from 'react'
import PropTypes from 'prop-types'
import PinkMetropolis from '../../images/metropolis-pink.svg'
import YellowMetropolis from '../../images/metropolis-yellow.svg'
import BlueMetropolis from '../../images/metropolis-blue.svg'
import WhiteMetropolis from '../../images/metropolis-white.svg'
import { motion } from 'framer-motion'

const MetropolisIcon = ({ blendMode, opacity }) => (
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
      <motion.div
        initial={{ translateY: '50%'}}
        animate={{ translateY: '25%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 6 }}
      >
        <BlueMetropolis style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
    
    <div
      style={{
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
        initial={{ translateY: '25%', scaleX: '0.25', scaleY: '0.25' }}
        animate={{ translateY: '75%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 7 }}
      >
        <WhiteMetropolis style={{ width: '100%' }} />
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
        initial={{ translateY: '66.666%', scaleX: '0.666', scaleY: '0.666' }}
        animate={{ translateY: '0%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 5 }}
      >
        <YellowMetropolis style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>

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
        initial={{ translateY: '75%', scaleX: '0.333', scaleY: '0.333' }}
        animate={{ translateY: '0%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 4 }}
      >
        <PinkMetropolis style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
  </div>
)

MetropolisIcon.propTypes = {
  scale: PropTypes.number,
  blendMode: PropTypes.string,
  opacity: PropTypes.number,
}

export default MetropolisIcon
