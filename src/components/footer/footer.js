import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
//import posed from 'react-pose'
import { FooterContainer } from './footer.css'
//import Title from 'components/title'
import Container from 'components/container'
import Nav from 'components/footer/nav'
import Logo from './../../images/overlay-logo.svg'

// Example of a component-specific page transition
// const AnimatedContainer = posed.div({
//   enter: {
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '-100%',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
// })

const Footer = ({ title }) => (
  <div  style={{backgroundColor: '#eed796'}}>
    <Container>
      <FooterContainer>
        <div aria-label={title} style={{ maxWidth: '24rem', fontSize: '0.75rem' }}>
          <div style={{ width: '6rem', paddingTop: '-1.5rem', mixBlendMode: 'multiply' }}>
            <Logo />
          </div>
          © All rights reserved.<br />Overlay is a project of ING. <br />ING Labs, 10
          Moorgate, London, UK, EC2R 6DA
        </div>

        <Nav />
      </FooterContainer>
    </Container>
  </div>
)

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Footer
