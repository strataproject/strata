import React from 'react'
import PropTypes from 'prop-types'
import { Figure } from './teamMember.css'

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const TeamMember = ({ name, title, photo, linkedin, twitter }) => (
  <Figure itemscope itemtype="http://schema.org/Person">
    <img src={`/team/${photo}.jpg`} alt="" />
    <figcaption>
      <p className="name" itemProp="name">
        {name}
      </p>
      <p className="title">{title}</p>

      <p>
        <span>
          {twitter && (
            <a href={`https://twitter.com/${twitter}`} itemProp="url">
              <FaTwitter />
            </a>
          )}
        </span>
        <span>
          {linkedin && (
            <a href={`https://linkedin.com/in/${linkedin}`} itemProp="url">
              <FaLinkedin />
            </a>
          )}
        </span>
      </p>
    </figcaption>
  </Figure>
)

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
}

export default TeamMember
