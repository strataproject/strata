import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.header`
  ${tw`mx-auto p-2 md:p-4 lg:p-8 xl:p-16`}
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
