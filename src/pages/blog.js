import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle={'Blog'} />
    <Box></Box>
    <div style={{ marginTop: '16em' }} />
  </Layout>
)

export default Blog
