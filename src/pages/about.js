import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Container from 'components/container'
import Box from 'components/box'
import Title from 'components/title'
import Head from 'components/head'
import Text from 'components/text'
import Img from 'gatsby-image'
import Hero from 'components/hero/hero.css'

import AnimatedIcon from 'components/animatedIcon'
import { ImageHalf, TextHalf, Halves } from 'components/halves'
import { pink, green, blue, orange } from 'constants/theme'

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />

    <Container>
      <div style={{ position: 'relative' }}>
        <Halves>
          
          <TextHalf>
            <Hero>
              <Title as="h1" size="large" theme="blackOnWhite">
                Our mission:<br />
                to help the <span style={{ color: pink }}>sustainable finance</span> sector to rapidly&nbsp;
                <span style={{ color: green }}>scale up</span> to provide the&nbsp; <span style={{ color: blue }}>investment</span> needed to counteract <span style={{ color: orange }}>climate change</span>
              </Title>
              
            </Hero>

            <Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.aboutJson.content.childMarkdownRemark.html,
                }}
              />
            </Text>
          </TextHalf>
          <ImageHalf>
            <div
              className="image-half-inner"
              style={{ height: '100%', padding: '2rem' }}
            >
              <AnimatedIcon
                shape="metropolis"
                patternA={{ color: green }}
                patternB={{ color: pink }}
              />
            </div>
          </ImageHalf>
        </Halves>
      </div>
    </Container>
    <div style={{ marginTop: '16em' }} />
  </Layout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    file(
      relativePath: {
        eq: "images/about/izuddin-helmi-adnan-ABKvlwjFT68-unsplash.jpg"
      }
    ) {
      publicURL
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
