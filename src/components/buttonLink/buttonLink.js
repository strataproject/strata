import styled from 'styled-components'
import { green } from 'constants/theme'
import { Link } from 'gatsby'

const ButtonLink = styled(Link)`
  -webkit-appearance: none;
  background-color: ${green};
  border-radius: 5px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
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

export default ButtonLink
