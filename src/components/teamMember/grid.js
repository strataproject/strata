import React from 'react'
import TeamMember from './teamMember'
import PropTypes from 'prop-types'
import { Grid } from './teamMember.css'

const TeamGrid = ({ team }) => {
  return (
    <Grid>
      {team
        .filter(_ => _.photo)
        .map(person => (
          <TeamMember key={person.name} {...person} />
        ))}
    </Grid>
  )
}

TeamGrid.propTypes = {
  team: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default TeamGrid
