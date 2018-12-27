import styled from 'styled-components'

import tw from 'tailwind.macro'

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      ${tw`font-sans`}
      text-transform: uppercase;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`
