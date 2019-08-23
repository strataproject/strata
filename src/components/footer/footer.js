import React from 'react'
import PropTypes from 'prop-types'
import { FooterContainer, FooterNav } from './footer.css'
import Container from 'components/container'
import Nav from 'components/footer/nav'
import Logo from './../../images/overlay-logo-whitespace-centered-on-o.svg'
import { green, blue, yellow } from '../../constants/theme'

const Footer = ({ title }) => (
  <div>
    <div style={{ backgroundColor: 'white' }}>
      <Container>
        <FooterContainer></FooterContainer>
      </Container>
    </div>
    <div style={{ backgroundColor: green }}>
      <Container>
        <FooterContainer></FooterContainer>
      </Container>
    </div>
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
            © All rights reserved.
            <br />
            Overlay is a project of ING. <br />
            ING Labs, 10 Moorgate, London, UK, EC2R 6DA
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
