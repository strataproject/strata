import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AnimatedMobileMenu } from 'components/animatedMobileMenu/AnimatedMobileMenu'

import { MobileNavContainer } from './mobileNav.css'

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
    const { menu } = this.props

    return (
      <MobileNavContainer>
        <div style={{ position: 'relative', height: '2rem' }}>
          <AnimatedMobileMenu menu={menu} />
        </div>
      </MobileNavContainer>
    )
  }
}

export default MobileNav

MobileNav.propTypes = {
  color: PropTypes.string,
  menu: PropTypes.array,
}

MobileNav.defaultProps = {
  color: 'rose',
  menu: [],
}

MobileNav.defaultState = {
  open: false,
}
