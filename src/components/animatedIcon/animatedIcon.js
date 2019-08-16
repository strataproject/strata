import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import PinkCircle from '../../images/circle-pink.svg'
import YellowCircle from '../../images/circle-yellow.svg'
import BlueCircle from '../../images/circle-blue.svg'
import PinkRhombus from '../../images/rhombus-pink.svg'
import YellowRhombus from '../../images/rhombus-yellow.svg'
import BlueRhombus from '../../images/rhombus-blue.svg'
import { yellow, pink } from 'constants/theme'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import PatternBox from 'components/patternBox'

const ParallaxImage = ({ children, style }) => {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const height = typeof window !== 'undefined' ? window.innerHeight : -0.1
  const y = useTransform(scrollY, [elementTop, elementTop + 1], [-0.1, 0.1], {
    clamp: false,
  })

  const distance = height / 4
  const offset = -(height / 2)
  const opacityTransform = useTransform(
    scrollY,
    [elementTop - distance + offset, elementTop + distance + offset],
    [0, 3],
    {
      clamp: false,
    }
  )

  const opacity = useTransform(opacityTransform, [0, 3], value => {
    if (value < 1) {
      return 1 - value
    } else if (value > 2) {
      return (3 - value) / 5
    } else {
      return 1
    }
  })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.getBoundingClientRect().top)
  }, [ref])

  return (
    <div ref={ref} className="image-container" style={style}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  )
}

ParallaxImage.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}

const CircleIcon = ({ scale }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        mixBlendMode: 'multiply',
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
        mixBlendMode: 'multiply',
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
        mixBlendMode: 'multiply',
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
  </div>)

const RhombusIcon = ({ scale }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        mixBlendMode: 'multiply',
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        top: '0px',
        left: '0px',
      }}
    >
      <motion.div>
        <motion.div
          initial={{ translateY: '33.333%' }}
          animate={{ translateY: '0%' }}
          transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 4 }}
          
        >
          <PinkRhombus style={{ mixBlendMode: 'multiply', width: '100%' }} />
        </motion.div>
      </motion.div>
    </div>
    <div
      style={{
        mixBlendMode: 'multiply',
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        top: '20px',
        left: '0px',
      }}
    >
      <motion.div
        initial={{ translateY: '-33.333%' }}
        animate={{ translateY: '33.333%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 5 }}
      >
        <YellowRhombus style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
    <div
      style={{
        mixBlendMode: 'multiply',
        width: '100%',
        position: 'absolute',
        zIndex: '-1',
        top: '0px',
        left: '0px',
      }}
    >
      <motion.div
        initial={{ translateY: '-33.333%' }}
        animate={{ translateY: '66.666%' }}
        transition={{ ease: 'easeInOut', yoyo: Infinity, duration: 6 }}
      >
        <BlueRhombus style={{ mixBlendMode: 'multiply', width: '100%' }} />
      </motion.div>
    </div>
  </div>)

const AnimatedIcon = ({ shape }) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  let ShapeIcon = CircleIcon

  if(shape == 'rhombus') {
    ShapeIcon = RhombusIcon
  }
  return (
    <div
      style={{ position: 'relative', height: '100%', paddingBottom: '100%' }}
    >
      <div
        style={{
          mixBlendMode: 'multiply',
          position: 'relative',
          padding: '10%',
        }}
      >
        <ShapeIcon scale={scale} />
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
        <PatternBox style={{ width: '100%', height: '6rem' }} fill={pink} />
      </ParallaxImage>

      <ParallaxImage
        style={{ position: 'absolute', width: '25%', height: '12rem' }}
      >
        <PatternBox style={{ width: '100%', height: '12rem' }} fill={yellow} />
      </ParallaxImage>
    </div>
  )
}

export default AnimatedIcon
