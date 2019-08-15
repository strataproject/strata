import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Reliant on nav_modal being present in Layout.jsx
let navModalRoot

class ModalMenu extends Component {
  constructor(props) {
    super(props)
    if (typeof document !== 'undefined') {
      this.el = document.createElement('div')
    }
  }

  componentDidMount() {
    navModalRoot = document.getElementById('nav_modal')
    navModalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    if(navModalRoot) {
      navModalRoot.removeChild(this.el)
    }
  }

  render() {
    if (typeof document === 'undefined') {
      return <div />
    }
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default ModalMenu