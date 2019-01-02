import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
import Link from 'gatsby-link'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
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
    </Box>

    <Box>
      <p>
        We believe the only way to address the urgency of the Paris Accord
        targets is to unleash a wave of investment in green initiatives.
      </p>
      <p>
        Starting with commercial real estate, we believe that without adequate
        high quality data about the greenness of assets, there will be a
        limiting factor on being able to achieve the growth needed.
      </p>
      <p>
        We aim to enable financial institutions to offer green financial
        products faster and more widely by tackling the problem of sourcing and
        handling sustainability data.
      </p>
      <Modal cta="Register your interest">
        <Signup />
      </Modal>
      <p>
        <Link to="/about">Read more</Link>
      </p>
    </Box>

    <div style={{ marginTop: '16em' }} />

    {/*<Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />*/}
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
