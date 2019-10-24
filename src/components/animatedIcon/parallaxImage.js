import React from 'react'
import PropTypes from 'prop-types'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useRef, useLayoutEffect } from 'react'

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

export default ParallaxImage
