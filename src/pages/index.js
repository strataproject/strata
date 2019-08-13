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
import { Button } from 'components/modal/modal.css'

const Halves = styled.div`
  @supports not (display: grid) {
    ${tw`lg:flex`}
  }
  @supports (display: grid) {  
    
    align-items: center;

    @media (min-width: 30em) {
      display: grid;  
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      div:nth-child(1) { grid-area: 1 / 1 / 1 / 3; }
      div:nth-child(2) { grid-area: 1 / 3 / 1 / 6; }
      div:nth-child(3) { grid-area: 2 / 1 / 2 / 2; }
      div:nth-child(4) { grid-area: 2 / 3 / 2 / 5; }
    }
  }
`

const Half = styled.div`
  @supports not (display: grid) {
    ${tw`w-full lg:w-1/2`}
  }
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
                at scale
              </Title>            
              <p>Dealing with the consequences of climate change means acting more quickly with more data.</p>
              <p>Overlay helps the sustainable finance sector scale up to support its clients in meeting global emissions targets.</p>
              <Button>Register interest</Button>
            </Hero>
          </Half>
          <Half>
            <div style={{height: '612px', padding: '2rem'}}>
              <AnimatedIcon />
            </div>
          </Half>
          
          <Half>
            <div style={{height: '400px'}}>
              <AnimatedIcon />
            </div>
          </Half>
          <Half>
            <p>Our data platform and software tools help financial institutions make use of the latest sustainability data to design the most relevant products for its domestic and commercial real estate clients.</p>

            <p>From selecting the most relevant investments to creating dashboards to make that data usable by multiple stakeholders, Overlay uses automation to rapidly verify, validate and scale sustainable financial products for any financial institution globally. </p>
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
