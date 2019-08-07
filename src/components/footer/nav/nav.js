import React from 'react'
import { Link } from 'gatsby'
import { Container } from './nav.css'

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/privacy">Privacy</Link>
      </li>
      <li>
        <Link to="/disclaimer">Disclaimer</Link>
      </li>
    </ul>
  </Container>
)

export default Nav
