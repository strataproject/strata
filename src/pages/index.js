import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box from 'components/box'
import Container from 'components/container'
import Title from 'components/title'
import PatternBox from 'components/patternBox'
import Link from 'gatsby-link'
import Color from 'color'
//import Gallery from 'components/gallery'
//import IOExample from 'components/io-example'
import Modal from 'containers/modal'
import { graphql } from 'gatsby'
import Signup from 'components/signup'
import Icon from './../images/overlay-icon.svg'
import Pink from './../images/circle-pink.svg'
import Yellow from './../images/circle-yellow.svg'
import Blue from './../images/circle-blue.svg'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Halves = styled.div`
  ${tw`flex`}
`

const Half = styled.div`
  ${tw`w-full sm:w-1/2 `}
`


const Index = ({ data }) => (
  <Layout>
    <Container>
      

      <div style={{position: 'relative'}}>
        <Halves>
          <Half>
            <Box>
              <Title as="h1" size="large">
                A new platform to tackle the problem of working with sustainability data
                at scale.
              </Title>
            
              <div
                dangerouslySetInnerHTML={{
                  __html: data.homeJson.content.childMarkdownRemark.html,
                }}
              />
            </Box>
          </Half>
          <Half>
            <div style={{mixBlendMode: 'multiply', position: 'relative', padding: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Pink style={{mixBlendMode: 'multiply', width: '512px', position: 'absolute', top: '0px', left: '0px'}} />
                <Yellow style={{mixBlendMode: 'multiply', width: '512px', position: 'absolute', top: '24px', left: '15px'}}  />
                <Blue style={{mixBlendMode: 'multiply', width: '512px', position: 'absolute', top: '0px', left: '30px'}} />
              </div>
            </div>
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
