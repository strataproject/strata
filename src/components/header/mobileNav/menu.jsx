import React from 'react'
import styled from 'styled-components'
import {FullScreenMenu, MenuListItem} from './menu.css'

function Menu(props){
  const { hidden, items, to, open, color } = props
  return (
    <FullScreenMenu to={to} hidden={hidden} aria-label="Main navigation">
      {items.map((props, index) => (
        <MenuListItem key={index} style={props}>{items[index] ? items[index].element : '' }</MenuListItem>
      ))}
      <MenuListItem  style={props}>&nbsp;</MenuListItem>
    </FullScreenMenu>
  )
}

export default Menu