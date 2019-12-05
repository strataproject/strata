import React from 'react'
import Box from 'components/box'
import Layout from 'components/layout'
import Container from 'components/container'
import Title from 'components/title'
import Text from 'components/text'

const NotFound = () => (
  <Layout>
    <Container>
      <Box>
        <Title as="h1" size="large" theme="blueOnWhite">
          404: Not found
        </Title>
      </Box>
      <Text>
        <p>
          The page you were looking for does not exist. Please try from the{' '}
          <a href="/">home page</a> instead.
        </p>
      </Text>
    </Container>
    <div style={{ marginTop: '16em' }} />
  </Layout>
)

export default NotFound
