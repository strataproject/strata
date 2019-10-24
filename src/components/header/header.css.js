import styled from 'styled-components'
import tw from 'tailwind.macro'
import { green, orange } from '../../constants/theme'

export const HeaderContainer = styled.header`
  ${tw`mx-auto c-container max-w-3xl p-2`}
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #272722;
    transition: color 0.2s ease;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 1rem;
    margin: -1rem;

    &:hover {
      color: ${orange};
    }
    &.active {
      color: ${green};
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: ${orange};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
    :hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    &.active:hover:before {
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
  }
`
