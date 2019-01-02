import React from 'react'
import { navigateTo } from 'gatsby-link'
import Form from 'components/form'
import Title from 'components/title'
import { Button } from './../modal/modal.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    console.log(e)
    e.preventDefault()
    const form = e.target
    if (typeof analytics !== 'undefined') {
      analytics.track('Signed up')
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Form
        netlify="netlify"
        name="strata-early-interest"
        method="post"
        action="/joined"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="strata-early-interest" />
        <input type="hidden" name="bot-field" onChange={this.handleChange} />
        <Title as="h2" size="medium">
          Sign up for early access
        </Title>
        <div className="field">
          <label htmlFor="name" id="name_label">
            <span>Your name</span>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="field">
          <label htmlFor="email" id="email_label">
            <span>Your email</span>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="field">
          <label htmlFor="company" id="company_label">
            <span>Your company</span>
            <input
              type="text"
              name="company"
              id="company"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="field">
          <Button type="submit">Sign up</Button>
        </div>
      </Form>
    )
  }
}
