import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { HeaderContainer } from './header.css'
import DesktopNav from 'components/header/desktopNav'
import MobileNav from 'components/header/mobileNav'
import Logo from './../../images/overlay-wordmark-and-icon-logo-transparent.svg'

import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`mx-auto c-container container`}
`

const Header = ({ title }) => {
  const menu = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    // { to: '/blog', label: 'Blog' },
    // { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <Container>
      <HeaderContainer>
        <Link to="/" aria-label={title} style={{ width: '12rem' }}>
          <Logo />
        </Link>

        <div>
          <DesktopNav menu={menu} />
          <MobileNav menu={menu} />
        </div>
      </HeaderContainer>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
