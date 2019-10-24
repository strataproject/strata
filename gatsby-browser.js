import React from 'react'
//import AppProvider from 'store/provider'
import {
  wrapPageElementWithTransition,
  wrapPageElementWithoutTransition,
} from 'helpers/wrapPageElement'
import 'typeface-inter'
import 'typeface-lexend-deca'
import 'typeface-averta-pe'

//import 'typeface-muli'
// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <div>{element}</div>
}

wrapPageElementWithTransition

// Page Transitions
//export const unusedWrapPageElement = wrapPageElementWithTransition
export const wrapPageElement = wrapPageElementWithoutTransition
