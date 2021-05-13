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

    const input = screen.findByPlaceholderText('Search')
    userEvent.type(input, 'Health')
    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'})

    await waitFor(() => {
      const articles = screen.getAllByText('Health', { exact: false})
      expect(articles.length).toBeGreaterThan(5);
    })

    console.log(input);
  })
})