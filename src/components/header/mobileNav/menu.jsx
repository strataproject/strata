import React from 'react'
import PropTypes from 'prop-types'
import { FullScreenMenu, MenuListItem } from './menu.css'

function Menu(props){
  const { hidden, items } = props
  return (
    <FullScreenMenu hidden={hidden} aria-label="Main navigation">
      {items.map((props, index) => (
        <MenuListItem key={index} style={props}>{items[index] ? items[index].element : '' }</MenuListItem>
      ))}
      <MenuListItem  style={props}>&nbsp;</MenuListItem>
    </FullScreenMenu>
  )
}

Menu.propTypes = {
  hidden: PropTypes.bool,
  items: PropTypes.array,  
}

export default Menu