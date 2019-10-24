import * as React from 'react'
import { MenuItem } from './MenuItem'
import { StyledNavigation } from './Navigation.css'
import PropTypes from 'prop-types'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = ({ menu }) => (
  <StyledNavigation variants={variants}>
    {menu.map((item, index) => (
      <MenuItem item={item} index={index} key={index} />
    ))}
  </StyledNavigation>
)

Navigation.propTypes = {
  menu: PropTypes.object,
}

export { Navigation }
