import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'

const Privacy = ({ data }) => (
  <Layout>
    <Head pageTitle={data.privacyJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.privacyJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
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
