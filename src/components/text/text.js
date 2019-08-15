import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './text.css'

const Text = ({ children }) => <Container>{children}</Container>

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Text
