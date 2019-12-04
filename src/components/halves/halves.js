import styled from 'styled-components'

export const Halves = styled.div`
  @supports not (display: grid) {
    ${tw`lg:flex`}
  }
  @supports (display: grid) {
    align-items: center;

    @media (min-width: 60em) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      div:nth-child(1) {
        grid-area: 1 / 1 / 1 / 7;
      }
      div:nth-child(2) {
        grid-area: 1 / 7 / 1 / 13;
      }
      div:nth-child(3) {
        grid-area: 2 / 8 / 2 / 13;
      }
      div:nth-child(4) {
        grid-area: 2 / 1 / 2 / 7;
      }
      div:nth-child(5) {
        grid-area: 3 / 1 / 3 / 7;
      }
      div:nth-child(6) {
        grid-area: 3 / 8 / 3 / 13;
      }
    }
  }
`

export const TextHalf = styled.div`
  @supports not (display: grid) {
    ${tw`w-full lg:w-1/2`}
  }
`

export const ImageHalf = styled.div`
  pointer-events: none;

  @supports not (display: grid) {
    ${tw`w-full lg:w-1/2`}
  }
  @supports (display: grid) {
    position: relative;
    width: 100%;
  }
  @media (max-width: 60rem) {
    margin-bottom: -4rem;
  }
`
