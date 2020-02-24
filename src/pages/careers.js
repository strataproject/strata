import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Container from 'components/container'
import Head from 'components/head'
import Box from 'components/box'
import Title from 'components/title'

const Careers = ({ data }) => (
  <Layout>
    <Head pageTitle={data.careersJson.title} />
    <Container>
      <Box>
        <Title as="h1" size="large" theme="orangeOnWhite">
          Career opportunities at Overlay
        </Title>
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.careersJson.content.childMarkdownRemark.html,
        }}
      />
      {data.active.edges.map(i => (
        <div key={i.node.childMarkdownRemark.frontmatter.url}>
          <h2>
            <a href={i.node.childMarkdownRemark.frontmatter.apply}>
              {i.node.childMarkdownRemark.frontmatter.title}
            </a>
          </h2>
        </div>
      ))}

      <p>&nbsp;</p>
      <h2>Advertising soon</h2>
      <p>
        The following roles are in our hiring plan but we have not yet
        advertised them. If you&apos;d be interested in these roles, please email
        us at <a href="overlay@jobs.workable.com">overlay@jobs.workable.com</a>.
      </p>
      {data.pending.edges.map(i => (
        <div key={i.node.childMarkdownRemark.frontmatter.url}>
          <h3>{i.node.childMarkdownRemark.frontmatter.title}</h3>
        </div>
      ))}

      <p>&nbsp;</p>
      <h2>Recently closed</h2>

      {data.closed.edges.map(i => (
        <div key={i.node.childMarkdownRemark.frontmatter.url}>
          <h3>{i.node.childMarkdownRemark.frontmatter.title}</h3>
        </div>
      ))}
    </Container>
    <div style={{ marginTop: '16em' }} />
  </Layout>
)

Careers.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Careers

export const query = graphql`
  query CareersQuery {
    careersJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }

    closed: allFile(
      sort: {
        order: DESC, fields: [name]
      }, 
      filter: {
        childMarkdownRemark: { frontmatter: { status: { eq: "closed" } } },
        absolutePath: {regex: "/(\/content\/jobs)/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              apply
            }
          }
        }
      }
    }
    
    active: allFile(
      sort: {
        order: DESC, fields: [name]
      }, 
      filter: {
        childMarkdownRemark: { frontmatter: { status: { eq: "active" } } },
        absolutePath: {regex: "/(\/content\/jobs)/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              apply
            }
          }
        }
      }
    }

    pending: allFile(
      sort: {
        order: DESC, fields: [name]
      }, 
      filter: {
        childMarkdownRemark: { frontmatter: { status: { eq: "pending" } } },
        absolutePath: {regex: "/(\/content\/jobs)/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              apply
            }
          }
        }
      }
    }
  }
`
