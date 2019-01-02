import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './form.css'

const Form = props => <Container {...props}>{props.children}</Container>

Form.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Form
