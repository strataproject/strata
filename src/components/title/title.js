import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './title.css'
import { themes } from '../../constants/theme'
import { ThemeProvider } from 'styled-components'

const Title = ({ children, as = 'span', size, theme = 'blackOnWhite' }) => {
  return (
    <ThemeProvider theme={themes[theme]}>
      <Text as={as} size={size}>
        {children}
      </Text>
    </ThemeProvider>
  )
}

Title.propTypes = {
  children: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
  theme: PropTypes.string,
}

export default Title
