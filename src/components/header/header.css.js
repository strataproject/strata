import styled from 'styled-components'
import tw from 'tailwind.macro'
import { green, orange } from '../../constants/theme'

export const HeaderContainer = styled.header`
  ${tw`mx-auto c-container max-w-3xl p-2`}
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #272722;
    transition: color 0.2s ease;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 1rem;
    margin: -1rem;

    &:hover {
      color: ${orange};
    }
    &.active {
      color: ${green};
    }
  }
`
