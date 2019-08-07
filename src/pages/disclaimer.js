import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'

const Disclaimer = ({ data }) => (
  <Layout>
    <Head pageTitle={data.disclaimerJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.disclaimerJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
)

Disclaimer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Disclaimer

export const query = graphql`
  query DisclaimerQuery {
    disclaimerJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
