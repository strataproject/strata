import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Container from 'components/container'
import Head from 'components/head'
import Box from 'components/box'
import Title from 'components/title'

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <Container>
      <Box>
        <Title as="h1" size="large">
          Contact
        </Title>
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contactJson.content.childMarkdownRemark.html,
        }}
      />
    </Container>
  </Layout>
)

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contact

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
