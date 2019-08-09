import styled from 'styled-components'
import tw from 'tailwind.macro'

export const HeaderContainer = styled.header`
  ${tw`mx-auto c-container max-w-2xl p-2`}
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #272722;
    transition: color 0.2s ease;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;

    &:hover {
      color: #00aa00;
    }
    &.active {
      color: #00dd00;
    }
  }
`
