import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from 'components/head'
import Header from 'components/header'
import GlobalStyle from 'global.css.js'
import Curves from './../../images/strata-bg.svg'

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
    <Curves
      style={{
        position: 'fixed',
        zIndex: -1,
        bottom: '0px',
        left: '0px',
        width: '100%',
        height: '70vh',
        opacity: '0.35',
        transform: 'scaleX(-1)',
      }}
      alt="Graphic showing curves implying data"
    />
  </div>
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
