import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Container from 'components/container'
import Head from 'components/head'
import Title from 'components/title'

const Privacy = ({ data }) => (
  <Layout>
    <Container>
      <Head pageTitle={data.privacyJson.title} />
      <Box>
        <Title as="h1" size="large">
          Privacy statement
        </Title>
      </Box>
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
