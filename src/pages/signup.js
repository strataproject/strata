import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'
import Container from 'components/container'
import Head from 'components/head'
import { ReactTypeformEmbed } from 'react-typeform-embed'

// eslint-disable-next-line
const SignupPage = ({ data }) => (
  <Layout>
    <Head pageTitle="Register your interest" />
    <Container>
      <Box>
        <Title as="h1" size="large" theme="pinkOnWhite">
          Get updates from us
        </Title>
        <p>
          Add your details below and we’ll add you to our newsletter for
          occasional updates about our progress.
        </p>
      </Box>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '80vh',
          border: '1px solid #ddd',
        }}
      >
        <ReactTypeformEmbed
          url="https://icectypeform.typeform.com/to/dDNB1u"
          mode="widget"
        />
      </div>
    </Container>
  </Layout>
)

SignupPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SignupPage
