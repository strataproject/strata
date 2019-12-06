import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Grid = styled.div`
  max-width: 50rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
`

export const Figure = styled.figure`
  ${tw`pl-4 pr-4 max-w-2xl mx-auto`}
  text-align: center;

  .name {
    font-weight: bold;
  }

  .title {
    font-style: italic;
  }

  img {
    border-radius: 50%;
    max-width: 160px;
    box-shadow: 1px 1px 8px 0px #00000042;
  }

  figcaption {
    margin-top: 8px;
    ${tw`text-xs`}

    p {
      margin: 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`
