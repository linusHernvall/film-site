import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect } from 'vitest'
import HomePage from '../Pages/HomePage'

describe('Search error message', () => {
  test('show an error message when searching with a blank input using the enter-key', async () => {
    render(<HomePage />)

    const searchMovie = screen.getByPlaceholderText('Search movies...')

    await userEvent.type(searchMovie, '{enter}')

    const errorMessage = await screen.findByText('Please enter a search term.')
    expect(errorMessage).toBeInTheDocument()
  })

  test('movie not found', async () => {
    render(<HomePage />)

    const searchMovie = screen.getByPlaceholderText('Search movies...')
    const search = screen.getByTestId('SearchIcon')

    await userEvent.type(searchMovie, 'wonka')
    await userEvent.click(search)

    const moviesNotFound = await screen.findByText('No movies found matching your search.')
    expect(moviesNotFound).toBeInTheDocument()
  })
})
