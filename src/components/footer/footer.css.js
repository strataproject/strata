import styled from 'styled-components'
import tw from 'tailwind.macro'

export const FooterContainer = styled.footer`
  ${tw`mx-auto py-2 md:py-4 lg:py-6 xl:py-8`}
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #757575;
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
