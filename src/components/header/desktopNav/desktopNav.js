import React from 'react'
import { Link } from 'gatsby'
import { Container } from './desktopNav.css'

const items = [
  
]
const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/team" activeClassName="active">
          Team
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </li>
    </ul>
  </Container>
)

export default Nav
