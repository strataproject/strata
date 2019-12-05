import React from 'react'
import { Link } from 'gatsby'
import { Container, Wrapper } from './nav.css'

const Nav = () => (
  <Wrapper>
    <Container aria-label="Legal links">
      <ul>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/disclaimer">Disclaimer</Link>
        </li>
      </ul>
    </Container>
    <Container aria-label="Social links">
      <ul>
        <li>Find us online</li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/overlayearth"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://uk.linkedin.com/company/ing"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Container>
  </Wrapper>
)

export default Nav
