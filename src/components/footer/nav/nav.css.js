import styled from 'styled-components'
import { green } from '../../../constants/theme'

import tw from 'tailwind.macro'

export const Wrapper = styled.div`
  display: block;
`

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin-left: 0;
    margin-bottom: 0;

    @media (min-width: 768px) {
      justify-content: flex-end;
      margin-left: 1.45rem;
      margin-bottom: 1.45rem;
    }

    li {
      ${tw`font-sans text-xs inline-block px-2`}
      margin-top: 2.4rem;
      text-transform: uppercase;

      & + li {
        margin-left: 1rem;
      }

      a {
        color: rgba(64, 64, 64, 0.9);
        transition: color 0.2s ease;
        text-decoration: none;
        letter-spacing: 1px;
        font-weight: bold;

        &:hover {
          color: ${green};
        }
        &.active {
          color: ${green};
        }
      }
    }
  }
`
