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
import { pink, green, orange, blue } from 'constants/theme'

// eslint-disable-next-line
const Index = ({ data }) => (
  <Layout>
    <Container>
      <div style={{ position: 'relative' }}>
        <Halves>
          <ImageHalf>
            <div className="image-half-inner" style={{ height: '100%', padding: '2rem' }}>
              <AnimatedIcon shape="circle" patternA={{color: pink}} patternB={{color: blue}} />
            </div>
          </ImageHalf>
          <TextHalf>
            <Hero>
              <Title as="h1" size="large" theme="blackOnWhite">
                A new <span style={{color: pink}}>data platform</span> for working with&nbsp;
                <span style={{color: green}}>sustainability data</span> in <span style={{color: blue}}>finance</span>
              </Title>
              <p>
                Dealing with the consequences of climate change means acting
                more quickly with more data.
              </p>
              <p>
                Overlay helps the sustainable finance sector scale up to support
                its clients in meeting global emissions targets.
              </p>

              {true && <ButtonLink to="/signup">Register interest</ButtonLink>}
            </Hero>
          </TextHalf>

          <ImageHalf>
            <div className="image-half-inner" style={{ height: '100%', padding: '2rem' }}>
              <AnimatedIcon shape="rhombus" />
            </div>
          </ImageHalf>
          <TextHalf>
            <Title as="h1" size="large" theme="blueOnWhite">
              Data for sustainable finance
            </Title>
            <p>
              Our data platform and software tools help financial institutions
              make use of the latest sustainability data to design the most
              relevant sustainable finance products based on real estate assets.
            </p>
          </TextHalf>

          <ImageHalf>
            <div className="image-half-inner" style={{ height: '100%', padding: '2rem' }}>
              <AnimatedIcon shape="hexagon" />
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

    { false && <Container>
      <div style={{marginTop: '8rem'}}>
        <Signup
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '6rem',
          }}
        />
      </div>
    </Container>}
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
