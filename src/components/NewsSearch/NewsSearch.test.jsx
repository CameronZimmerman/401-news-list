import React from 'react'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NewsSearch component', () => {
  it('renders a list of articles based on search', () => {
    screen.getByText('Loading')
  })
})