import React from 'react'
import PropTypes from 'prop-types'
import Pink from '../../images/circle-pink.svg'
import Yellow from '../../images/circle-yellow.svg'
import Blue from '../../images/circle-blue.svg'
import {yellow, pink} from 'constants/theme'
import { motion, useViewportScroll, useTransform } from "framer-motion"
import PatternBox from 'components/patternBox'


const AnimatedIcon = ({ children }) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div>
      <div style={{mixBlendMode: 'multiply', position: 'relative', padding: '2rem'}}>
        <div style={{position: 'relative'}}>
          <div style={{mixBlendMode: 'multiply', width: '512px', position: 'absolute', top: '0px', left: '0px'}}>
            
            <motion.div style={{'transform': `translateY(${scale}px)`}}>
              <motion.div 
                initial={{ 'rotate': '0deg' }}
                animate={{ 'rotate': '360deg' }}
                transition={{ duration: 4, loop: Infinity }}
                ease='easeInOut'
                style={{ originX: '260px', originY: '260px', width: '512px' }}>
                <Pink style={{mixBlendMode: 'multiply', width: '512px'}} />
              </motion.div>
            </motion.div>
          </div>
          <div style={{mixBlendMode: 'multiply', width: '512px', position: 'absolute', top: '24px', left: '15px'}}>
            <motion.div 
              initial={{ 'rotate': '0deg' }}
              animate={{ 'rotate': '360deg' }}
              transition={{ duration: 5, loop: Infinity }}
              ease='easeInOut'
              style={{ originX: '260px', originY: '260px', width: '512px' }}>
                <Yellow style={{mixBlendMode: 'multiply', width: '512px'}} />
            </motion.div>
          </div>
          <div style={{mixBlendMode: 'multiply', width: '512px', position: 'absolute', top: '0px', left: '30px'}}>
            <motion.div 
              initial={{ 'rotate': '0deg' }}
              animate={{ 'rotate': '360deg' }}
              transition={{ duration: 6, loop: Infinity }}
              ease='easeInOut'
              style={{ originX: '260px', originY: '260px', width: '512px' }}>
              <Blue style={{mixBlendMode: 'multiply', width: '512px'}} />
            </motion.div>
          </div>
        </div>
      </div>
      <PatternBox style={{position: 'absolute', width: '25%', height: '12rem'}} fill={yellow} />
      <PatternBox style={{position: 'absolute', bottom: '18%', right: '0px', width: '33%', height: '6rem'}} fill={pink} />
    </div>
  )
}

export default AnimatedIcon