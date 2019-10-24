import styled from 'styled-components'
import { Link } from 'gatsby'

export const OldNavItem = styled(Link)`
  ${tw`block bg-pink hover:bg-black no-underline text-white h-full w-full text-center flex flex-col justify-center items-center`};
`

export const NavItem = styled(Link)`
  ${tw`font-sans text-xs inline-block px-2`}
  color: #272722;
  transition: color 0.2s ease;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 1rem;
  margin: -1rem;
  text-transform: uppercase;
  background: white;

  &:hover {
    ${tw`text-orange`}
  }
  &.active {
    ${tw`text-green`}
  }
`
