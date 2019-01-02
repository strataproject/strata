import styled from 'styled-components'

import tw from 'tailwind.macro'

export const Container = styled.form`
  ${tw`max-w-sm`}
  label span {
    display: block;
  }

  .field {
    ${tw`mb-8`}
  }

  input {
    ${tw`w-full rounded-sm p-2 shadow-inner border-1 border-grey border-solid`}
  }
`
