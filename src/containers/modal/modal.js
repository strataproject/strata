import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from 'store/createContext'
import Modal from 'components/modal'

const ModalContainer = ({ children, cta }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal open={open} showModal={showModal} hideModal={hideModal} cta={cta}>
        {children}
      </Modal>
    )}
  </Consumer>
)

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  cta: PropTypes.string.isRequired,
}

export default ModalContainer
