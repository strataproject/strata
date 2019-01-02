import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import Curves from './../images/strata-bg.svg'
import Signup from 'components/signup'

const Index = ({ data }) => (
  <Layout>
    {/*  To handle form responses on Netlify */}
    <form
      name="strata-early-interest"
      netlify="netlify"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="hidden" name="form-name" value="strata-early-interest" />
      <input type="hidden" name="bot-field" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="company" name="company" />
    </form>

    <Box>
      <Title as="h1" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal cta="Request early access">
        <Signup />
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
