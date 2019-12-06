import React from 'react'
import PropTypes from 'prop-types'
import { Figure } from './teamMember.css'

import Twitter from '~/images/twitter.svg'
import Github from '~/images/github.svg'
import LinkedIn from '~/images/linkedin.svg'

const socials = {
  twitter: Twitter,
  linkedin: LinkedIn,
  github: Github,
}

const TeamMember = ({ name, title, photo, ...socialLinks }) => (
  <Figure>
    <img src={`/team/${photo}.jpg`} alt="" />
    <figcaption>
      <p className="name">{name}</p>
      <p className="title">{title}</p>
      {/* <ul className="social-links">
        {Object.entries(socialLinks).map(([key, value]) => {
          return value ? <li>{socials[key]()}</li> : null
        })}
      </ul> */}
    </figcaption>
  </Figure>
)

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default TeamMember
