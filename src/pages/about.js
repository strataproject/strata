import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Container from 'components/container'
import Box from 'components/box'
import Title from 'components/title'
import Head from 'components/head'

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Container>
      <Box>
        <Title as="h1" size="large">
          About Overlay
        </Title>
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Container>
    <div style={{ marginTop: '16em' }} />
  </Layout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
