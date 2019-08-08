import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Container from 'components/container'
import Head from 'components/head'

const Privacy = ({ data }) => (
  <Layout>
    <Container>
      <Head pageTitle={data.privacyJson.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: data.privacyJson.content.childMarkdownRemark.html,
        }}
      />
    </Container>
  </Layout>
)

Privacy.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Privacy

export const query = graphql`
  query PrivacyQuery {
    privacyJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
