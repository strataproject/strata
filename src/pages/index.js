import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Container from 'components/container'
import Title from 'components/title'
import Link from 'gatsby-link'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import Signup from 'components/signup'

const Index = ({ data }) => (
  <Layout>
    <Container>
      <Box>
        <Title as="h1" size="large">
          A new platform to tackle the problem of working with sustainability data
          at scale.
        </Title>
      </Box>

      <Box>
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />

        <Signup />

        <p>
          <Link to="/about">Read more</Link>
        </p>
      </Box>
    </Container>

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
