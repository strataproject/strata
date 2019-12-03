import React from 'react'
import PropTypes from 'prop-types'
import { FooterContainer, FooterNav } from './footer.css'
import Container from 'components/container'
import Nav from 'components/footer/nav'
import Logo from './../../images/overlay-wordmark-and-icon-logo-transparent.svg'
import { yellow, blue } from '../../constants/theme'
import PatternBox from 'components/patternBox/patternBox'

const Footer = ({ title }) => (
  <div>
    <div style={{ backgroundColor: 'white' }}>
      <Container>
        <FooterContainer></FooterContainer>
      </Container>
    </div>
    <PatternBox
      style={{ width: '100%', height: '128px', radius: 2 }}
      fill={blue}
      radius={2}
      size={16}
    />

    <div style={{ backgroundColor: yellow }}>
      <Container>
        <FooterContainer>
          <FooterNav>
            <div
              aria-label={title}
              style={{ maxWidth: '24rem', fontSize: '0.75rem' }}
            >
              <div
                style={{
                  width: '6rem',
                  paddingTop: '-1.5rem',
                  mixBlendMode: 'multiply',
                }}
              >
                <Logo />
              </div>
            </div>

            <Nav />
          </FooterNav>
          <p style={{ opacity: '0.9' }}>
            © All rights reserved
            <br />
            Overlay is incubated by ING Labs
            <br />
            Overlay is a registered trademark of ING.
            <br />
            8-10 Moorgate, London, UK, EC2R 6DA
          </p>
        </FooterContainer>
      </Container>
    </div>
  </div>
)

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Footer
