import React from 'react'
import PropTypes from 'prop-types'
import { StyledDiv } from './container.css'

const Container = ({ children }) => <StyledDiv>{children}</StyledDiv>

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
