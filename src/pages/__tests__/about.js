/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import About from '../about'

describe('About', () => {
  it('renders correctly', () => {
    console.log('starting')

    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('tests', () => {
    expect(1).toBe(1)
  })
})
