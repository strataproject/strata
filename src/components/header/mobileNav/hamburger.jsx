import React, {Fragment} from 'react'
import {Bar, BarRow} from './mobileNav.css'

export default function Hamburger(props) {
  return (
    <Fragment>
      <BarRow>
        <Bar />
      </BarRow>
      <BarRow>
        <Bar />
      </BarRow>
      <BarRow>
        <Bar />
      </BarRow>
    </Fragment>
  )
}