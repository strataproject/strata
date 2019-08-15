import styled from 'styled-components'
import { Link } from 'gatsby'

export const Bar = styled.div`
  height: 3px;
  margin: 2px;
  width: 1.5rem;
  ${tw`bg-pink`};
`

export const BarRow = styled.div`
  ${tw`flex flex-col justify-center items-center`};
`

export const StyledNav = styled.nav`
  display: block;
  ${tw`w-10 sm:w-12 md:w-24 lg:w-32 xl:w-48 h-10 sm:h-12 md:h-24 lg:h-32 xl:h-48`};
`

export const MobileNavContainer = styled.div`
  ${tw`p-4`}

  @media(min-width: 60em) {
    display: none;
  }

  @media(max-width: 60em) {
    display: block;
  }
`

export const StyledNavContent = styled.div`
  height: 100%;
  width: 100%;
  ${tw`flex flex-col justify-center items-center`};
`

export const StyledNavButton = styled.button`
  position: relative;
  outline: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
    ${tw`bg-black`}
  }
  &:active {
    outline: 0;
  }
  ${tw`w-8 h-8 bg-white text-white border-none flex flex-col justify-center items-center`};
`

export const NavItem = styled(Link)`
  ${tw`block bg-pink hover:bg-black no-underline text-white h-full w-full text-center flex flex-col justify-center items-center`};
`