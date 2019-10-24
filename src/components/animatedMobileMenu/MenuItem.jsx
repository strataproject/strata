import * as React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { NavItem } from './MenuItem.css'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    pointerEvents: 'auto',
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    pointerEvents: 'none',
  },
}

const MenuItem = ({ item }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavItem to={item.to}>{item.label}</NavItem>
    </motion.li>
  )
}

MenuItem.propTypes = {
  i: PropTypes.number,
  index: PropTypes.number,
  item: PropTypes.object,
}

export { MenuItem }
