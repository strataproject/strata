import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { StyledNavigation } from './Navigation.css'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ menu }) => (
  <StyledNavigation variants={variants}>
    { menu.map( (item, index)  => (
      <MenuItem item={item} index={index} key={index} />
    ))}
  </StyledNavigation>
)