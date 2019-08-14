import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom'
import Menu from './menu.jsx'

const Bar = styled.div`
  height: 3px;
  margin: 2px;
  width: 1.5rem;
  ${tw`bg-white`};
`

const BarRow = styled.div`
  ${tw`flex flex-col justify-center items-center`};
`

const StyledNav = styled.nav`
  display: block;
  ${tw`w-10 sm:w-12 md:w-24 lg:w-32 xl:w-48 h-10 sm:h-12 md:h-24 lg:h-32 xl:h-48`};
`

const MobileNavContainer = styled.div`
  ${tw`p-4`}

  @media(min-width: 60em) {
    display: none;
  }

  @media(max-width: 60em) {
    display: block;
  }
`

const StyledNavContent = styled.div`
  height: 100%;
  width: 100%;
  ${tw`flex flex-col justify-center items-center`};
`

const StyledNavButton = styled.button`
  position: relative;
  outline: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
    ${tw`bg-black`}
  }
  &:active {
    outline: 0;
  }
  ${tw`w-8 h-8 bg-green text-white border-none flex flex-col justify-center items-center`};
`


// Reliant on nav_modal being present in Layout.jsx
let navModalRoot

class ModalMenu extends Component {
  constructor(props) {
    super(props)
    if (typeof document !== 'undefined') {
      this.el = document.createElement('div')
    }
  }

  componentDidMount() {
    navModalRoot = document.getElementById('nav_modal')
    navModalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    if(navModalRoot) {
      navModalRoot.removeChild(this.el)
    }
  }

  render() {
    if (typeof document === 'undefined') {
      return <div />
    }
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}


const NavItem = styled(Link)`
  ${tw`block bg-pink hover:bg-black no-underline text-white h-full w-full text-center flex flex-col justify-center items-center`};
`

class MobileNav extends Component {
  state = {
    open: false,
    hidden: true,
  }

  toggle = () => {
    if (this.state.open) {
      this.setClosed()
    } else {
      this.setOpen()
    }
  }

  setOpen = () => {
    this.setState({ hidden: false, open: true })
    if (this.hiddenTimeout) {
      clearTimeout(this.hiddenTimeout)
    }
  }

  setClosed = () => {
    this.setState({ hidden: false, open: false })
    this.hiddenTimeout = setTimeout(() => this.setState({ hidden: true }), 1000)
  }

  componentWillUnmount = () => {
    clearTimeout(this.hiddenTimeout)
  }

  render() {
    const { color } = this.props
    const { open, hidden } = this.state
    const { setClosed, setOpen, toggle } = this

    const menu = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/blog', label: 'Blog' },
      { to: '/team', label: 'Team' },
      { to: '/contact', label: 'Contact' },
    ]

    const items = menu.map(item => {
      const element = (
        <NavItem style={{ color: 'white', fontStyle: 'normal' }} to={item.to} onClick={setClosed}>
          <h2 style={{ textDecoration: 'none', color: 'white' }}>{item.label}</h2>
        </NavItem>
      )

      return {
        element,
        key: item.to,
      }
    })

    return (
      <MobileNavContainer>
        <div
          style={{
            position: 'absolute',
            zIndex: 501,
            top: '0px',
            right: '0px',
          }}
        >
          <StyledNav color={color}>
            <StyledNavContent onClick={toggle}>
              <StyledNavButton color={color} onClick={toggle} aria-label="Main menu">
                <Hamburger open={open} />
              </StyledNavButton>
            </StyledNavContent>
          </StyledNav>
        </div>
        <ModalMenu>
          <Menu color={color} open={open} hidden={hidden} items={items} />
        </ModalMenu>
      </MobileNavContainer>
    )
  }
}

function Hamburger(props) {

  return (
    <Fragment>
      <BarRow>
        <Bar />
      </BarRow>
      <BarRow>
        <Bar />
      </BarRow>
      <BarRow>
        <Bar />
      </BarRow>
    </Fragment>
  )
}

export default MobileNav

MobileNav.propTypes = {
  color: PropTypes.string,
}

MobileNav.defaultProps = {
  color: 'rose',
}

MobileNav.defaultState = {
  open: false,
}
