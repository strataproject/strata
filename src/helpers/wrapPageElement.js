import React from 'react'
import Transition from 'components/transition'
import PropTypes from 'prop-types'

const wrapPageElementWithTransition = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}

const wrapPageElementWithoutTransition = ({ element }) => {
  return <div>{element}</div>
}

wrapPageElementWithTransition.propTypes = {
  element: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
}

wrapPageElementWithoutTransition.propTypes = {
  element: PropTypes.object.isRequired,
}

export { wrapPageElementWithTransition, wrapPageElementWithoutTransition }
