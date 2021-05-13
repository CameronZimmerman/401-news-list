import dotenv from 'dotenv'
dotenv.config()

import React from 'react'
import NewsSearch from '../NewsSearch/NewsSearch'
import {screen, render, fireEvent, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'


describe('NewsSearch component', () => {
  it('renders a list of articles based on search', async () => {
    
    render(<NewsSearch />)
    
    screen.getByText('Loading')

    const ul = await screen.findByRole('list', {name: 'article-list'})
    expect(ul).not.toBeEmptyDOMElement()

    const input = await screen.findByPlaceholderText('Search')
    userEvent.type(input, 'May 2021{enter}')

    await waitFor(() => {
      const articles = screen.getAllByText('May 2021', { exact: false})
      expect(articles).not.toBeEmptyDOMElement()
    })

    console.log(input);
  })
})