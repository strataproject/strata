import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
import Container from 'components/container'
import Link from 'gatsby-link'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Head from 'components/head'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import Signup from 'components/signup'

const SignupPage = ({ data }) => (
  <Layout>
    <Head pageTitle='Register your interest' />
    <Container>
      <Box>
        <Title as="h1" size="large" theme="pinkOnWhite">
          Get updates from us
        </Title>
        <p>Add your details below and we'll add you to our newsletter for occasional updates about our progress.</p>
      </Box>
      
      <Signup />
    </Container>

  </Layout>
)

SignupPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SignupPage
