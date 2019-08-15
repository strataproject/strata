import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Container from 'components/container'
import Title from 'components/title'
import { graphql } from 'gatsby'
import Signup from 'components/signup'
import Hero from 'components/hero/hero.css'
import AnimatedIcon from 'components/animatedIcon'
import ButtonLink from 'components/buttonLink'
import { ImageHalf, TextHalf, Halves } from 'components/halves'

const Index = ({ data }) => (
  <Layout>
    <Container>
      <div style={{ position: 'relative' }}>
        <Halves>
          <ImageHalf>
            <div style={{ height: '100%', padding: '2rem' }}>
              <AnimatedIcon />
            </div>
          </ImageHalf>
          <TextHalf>
            <Hero>
              <Title as="h1" size="large" theme="blackOnWhite">
                A new data platform to tackle the problems of working with
                sustainability data for finance
              </Title>
              <p>
                Dealing with the consequences of climate change means acting
                more quickly with more data.
              </p>
              <p>
                Overlay helps the sustainable finance sector scale up to support
                its clients in meeting global emissions targets.
              </p>
              <ButtonLink to="/signup">Register interest</ButtonLink>
            </Hero>
          </TextHalf>

          <ImageHalf>
            <div style={{ height: '100%', padding: '2rem' }}>
              <AnimatedIcon />
            </div>
          </ImageHalf>
          <TextHalf>
            <Title as="h1" size="large" theme="blueOnWhite">
              Data for sustainable finance
            </Title>
            <p>
              Our data platform and software tools help financial institutions
              make use of the latest sustainability data to design the most
              relevant products for domestic and commercial real estate assets.
            </p>
          </TextHalf>

          <ImageHalf>
            <div style={{ height: '100%', padding: '2rem' }}>
              <AnimatedIcon />
            </div>
          </ImageHalf>
          <TextHalf>
            <Title as="h1" size="large" theme="greenOnWhite">
              Automated reporting
            </Title>
            <p>
              From selecting the most relevant investments to creating
              dashboards to make that data usable by multiple stakeholders,
              Overlay uses automation to rapidly verify, validate and scale
              sustainable financial products for any financial institution
              globally.{' '}
            </p>
          </TextHalf>
        </Halves>
      </div>
    </Container>

    <Container>
      <Signup style={{ margin: 'auto' }} />
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
