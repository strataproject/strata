import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'
import Title from 'components/title'

const Joined = ({ data }) => (
  <Layout>
    <Head pageTitle={data.joinedJson.title} />
    <Box>
      <Title as="h1" size="large">
        Thanks for getting in touch. Look out for an email confirmation from us.
      </Title>
    </Box>
  </Layout>
)

Joined.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Joined

export const query = graphql`
  query JoinedQuery {
    joinedJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
