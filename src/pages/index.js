import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import Form from 'components/form'
import { graphql } from 'gatsby'
import Curves from './../images/strata-bg.svg'
import { Button } from './../components/modal/modal.css'

const SignupForm = () => (
  <Form
    netlify
    name="strata-early-interest"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/joined"
  >
    <input type="hidden" name="bot-field" />
    <Title as="h2" size="medium">
      Sign up for early access
    </Title>
    <div className="field">
      <label htmlFor="name" id="name_label">
        <span>Your name</span>
        <input type="text" name="name" id="name" />
      </label>
    </div>

    <div className="field">
      <label htmlFor="email" id="email_label">
        <span>Your email</span>
        <input type="text" name="email" id="email" />
      </label>
    </div>

    <div className="field">
      <label htmlFor="company" id="company_label">
        <span>Your company</span>
        <input type="text" name="company" id="company" />
      </label>
    </div>

    <div className="field">
      <Button type="submit">Sign up</Button>
    </div>
  </Form>
)

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h1" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal cta="Request early access">
        <SignupForm />
      </Modal>
    </Box>

    {/*<Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />*/}
    <Curves
      style={{ width: '100%', height: 'auto' }}
      alt="Graphic showing curves implying data"
    />
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
