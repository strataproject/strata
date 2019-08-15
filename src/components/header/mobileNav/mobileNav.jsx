import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom'
import Menu from './menu.jsx'
import {Bar, BarRow, MobileNavContainer, NavItem, StyledNavButton, StyledNav, StyledNavContent } from './mobileNav.css'
import Hamburger from './hamburger'
import ModalMenu from './modalMenu'

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
        <StyledNav color={color}>
          <StyledNavContent onClick={toggle}>
            <StyledNavButton color={color} onClick={toggle} aria-label="Main menu">
              <Hamburger open={open} />
            </StyledNavButton>
          </StyledNavContent>
        </StyledNav>
        <ModalMenu>
          <Menu color={color} open={open} hidden={hidden} items={items} />
        </ModalMenu>
      </MobileNavContainer>
    )
  }
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
