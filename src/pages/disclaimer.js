import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
import Container from 'components/container'
import Head from 'components/head'

const Disclaimer = ({ data }) => (
  <Layout>
    <Head pageTitle={data.disclaimerJson.title} />
    <Container>
      <Box>
        <Title as="h1" size="large">
          Disclaimer
        </Title>
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.disclaimerJson.content.childMarkdownRemark.html,
        }}
      />
    </Container>
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
