import styled from 'styled-components'
import tw from 'tailwind.macro'

export const FooterContainer = styled.footer`
  ${tw`mx-auto py-12 md:py-16 lg:py-20 xl:py-24`}
`

export const FooterNav = styled.div`
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
