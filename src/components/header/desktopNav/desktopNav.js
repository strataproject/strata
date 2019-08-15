import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Container } from './desktopNav.css'

const Nav = ({ menu }) => (
  <Container>
    <ul>
      {menu.map((item, i) => (
        <li key={i}>
          <Link to={item.to} activeClassName="active">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </Container>
)

Nav.propTypes = {
  menu: PropTypes.array.isRequired,
}

export default Nav
