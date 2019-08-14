import React from 'react'
import styled from 'styled-components'

const FullScreenMenu = styled.ul`
  position: fixed;
  zindex: 500;
  top: 0px;
  left: '0px';
  width: 100vw;
  height: 100vh;
  display: ${props => (props.hidden ? 'none' : 'grid')};
  grid-auto-rows: 1fr;
  padding: 0;
  margin: 0;
`

const MenuListItem = styled.li`
  margin: 0;
`

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