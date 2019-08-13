import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Container from 'components/container'
import Title from 'components/title'
import Link from 'gatsby-link'
import Color from 'color'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import Signup from 'components/signup'
import Icon from './../images/overlay-icon.svg'

import AnimatedIcon from 'components/animatedIcon'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Halves = styled.div`
  ${tw`lg:flex`}
`

const Half = styled.div`
  ${tw`w-full lg:w-1/2`}
`

const Hero = styled.div`
  ${tw`py-2 md:py-4 lg:py-8 xl:py-16 md:max-w-md lg:pr-8`}
`

const Index = ({ data }) => (
  <Layout>
    <Container>
      

      <div style={{position: 'relative'}}>
        <Halves>
          <Half>
            <Hero>
              <Title as="h1" size="large">
                A new platform to tackle the problem of working with sustainability data
                at scale.
              </Title>
            
              <div
                dangerouslySetInnerHTML={{
                  __html: data.homeJson.content.childMarkdownRemark.html,
                }}
              />
            </Hero>
          </Half>
          <Half>
            <AnimatedIcon />
          </Half>
        </Halves>
      </div>
    </Container>

    <Container>
      <Signup style={{margin: 'auto'}} />
    </Container>
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
