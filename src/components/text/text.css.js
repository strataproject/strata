import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`max-w-lg`}
  border 1px solid ${props => props.theme.fg};
  color: ${props => props.theme.fg};
`
