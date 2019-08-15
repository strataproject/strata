import styled from 'styled-components'
import { accent } from 'constants/theme'

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: ${accent};
  border-radius: 5px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  padding: 1rem 2rem;
  transition: 0.2s background-color ease;
  ${tw`font-title`}
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #222222;
  }

  & + & {
    margin-left: 1rem;
  }
`

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  font-weight: normal;
  padding: 1rem;
  line-height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
`
