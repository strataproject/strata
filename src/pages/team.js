import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Container from 'components/container'
import Head from 'components/head'
import Box from 'components/box'
import Title from 'components/title'

const Team = ({ data }) => (
  <Layout>
    <Head pageTitle={data.teamJson.title} />
    <Container>
      <Box>
        <Title as="h1" size="large">
          Team
        </Title>
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.teamJson.content.childMarkdownRemark.html,
        }}
      />
    </Container>
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
