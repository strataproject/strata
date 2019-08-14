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
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      div:nth-child(1) { grid-area: 1 / 1 / 1 / 7; }
      div:nth-child(2) { grid-area: 1 / 7 / 1 / 13; }
      div:nth-child(3) { grid-area: 2 / 9 / 2 / 13; }
      div:nth-child(4) { grid-area: 2 / 2 / 2 / 8; }
      div:nth-child(5) { grid-area: 3 / 1 / 3 / 7; }
      div:nth-child(6) { grid-area: 3 / 8 / 3 / 13; }
    }
  }
`

const TextHalf = styled.div`
  @supports not (display: grid) {
    ${tw`w-full lg:w-1/2`}
  }
`

const ImageHalf = styled.div`
  @supports not (display: grid) {
    ${tw`w-full lg:w-1/2`}
  }
  @supports (display: grid) {
    height: 100%;
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
          <ImageHalf>
            <div style={{height: '100%', padding: '2rem'}}>
              <AnimatedIcon />
            </div>
          </ImageHalf>
          <TextHalf>
            <Hero>
              <Title as="h1" size="large" theme='blackOnWhite'>
                A new data platform to tackle the problems of working with sustainability data for finance
              </Title>            
              <p>Dealing with the consequences of climate change means acting more quickly with more data.</p>
              <p>Overlay helps the sustainable finance sector scale up to support its clients in meeting global emissions targets.</p>
              <Button>Register interest</Button>
            </Hero>
          </TextHalf>
                 
          <ImageHalf>
            <div style={{height: '100%', padding: '2rem'}}>
              <AnimatedIcon />
            </div>
          </ImageHalf>
          <TextHalf>
            <Title as="h1" size="large" theme='blueOnWhite'>
              Data for sustainable finance
            </Title>  
            <p>Our data platform and software tools help financial institutions make use of the latest sustainability data to design the most relevant products for its domestic and commercial real estate clients.</p>
          </TextHalf>

          <ImageHalf>
            <div style={{height: '100%', padding: '2rem'}}>
              <AnimatedIcon />
            </div>
          </ImageHalf>
          <TextHalf>
            <Title as="h1" size="large" theme='greenOnWhite'>
              Automated reporting
            </Title>  
            <p>From selecting the most relevant investments to creating dashboards to make that data usable by multiple stakeholders, Overlay uses automation to rapidly verify, validate and scale sustainable financial products for any financial institution globally. </p>
          </TextHalf>


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
