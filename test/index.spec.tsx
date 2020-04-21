import React from 'react'
import { render } from '../src'
import '@testing-library/jest-dom'

beforeEach(() => {
  document.body.innerHTML = `<div id="root"></div>`
})

it('renders', () => {
  const root = document.getElementById('root')

  render(<marquee>Hello World</marquee>, root)
  expect(root).toContainHTML('<div id="root"><marquee>Hello World</marquee></div>')
})
