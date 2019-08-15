import styled from 'styled-components'
import tw from 'tailwind.macro'

export const FooterContainer = styled.footer`
  ${tw`mx-auto py-12 md:py-16 lg:py-20 xl:py-24`}
  ${tw`font-sans text-xs`}
`

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
