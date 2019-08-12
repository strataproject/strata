import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Container from 'components/container'
import Head from 'components/head'
import Box from 'components/box'
import Title from 'components/title'

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle={'Blog'} />
    <Container>
      <Box>
        <Title as="h1" size="large">
          Thoughts from the Overlay Team
        </Title>
      </Box>
      
    </Container>
  </Layout>
)

export default Blog
