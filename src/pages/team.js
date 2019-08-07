import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'

const Team = ({ data }) => (
  <Layout>
    <Head pageTitle={data.teamJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.teamJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <div style={{ marginTop: '16em' }} />
  </Layout>
)

Team.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Team

export const query = graphql`
  query TeamQuery {
    teamJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
