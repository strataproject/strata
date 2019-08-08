import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
import Link from 'gatsby-link'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import Signup from 'components/signup'

const SignupPage = ({ data }) => (
  <Layout>
    <Box>
      <Signup />
    </Box>
    <div style={{ marginTop: '16em' }} />

  </Layout>
)

SignupPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SignupPage
