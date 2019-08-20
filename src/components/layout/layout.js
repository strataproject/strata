import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from 'components/head'
import Header from 'components/header'
import Footer from 'components/footer'
import GlobalStyle from 'global.css.js'

import styled from 'styled-components'
import tw from 'tailwind.macro'

//import Curves from './../../images/strata-bg.svg'

const Container = styled.div`
  ${tw`container mx-auto`}
`

const NavModal = styled.div`
  ${tw`absolute w-full`};
  z-index: 500;
`

const Layout = ({ data, children }) => (
  <Container>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <div style={{ minHeight: '100vh' }}>{children}</div>
    <Footer title={data.site.siteMetadata.siteTitle} />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithQuery
