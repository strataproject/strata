import styled from 'styled-components'

import tw from 'tailwind.macro'

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      ${tw`font-sans text-xs inline-block px-2`}
      margin-top: 2.4rem;
      text-transform: uppercase;

      & + li {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: 60em) {
    display: block;
  }

  @media (max-width: 60em) {
    display: none;
  }
`
