import styled from 'styled-components'
import tw from 'tailwind.macro'

export const HeaderContainer = styled.header`
  ${tw`mx-auto c-container max-w-2xl p-2`}
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`
