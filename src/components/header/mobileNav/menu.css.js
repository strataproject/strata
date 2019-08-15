import styled from 'styled-components'

export const FullScreenMenu = styled.ul`
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

export const MenuListItem = styled.li`
  margin: 0;
`
