import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`max-w-lg`}
  color: ${props => props.theme.fg};
`
