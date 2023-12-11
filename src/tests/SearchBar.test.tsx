import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, vi } from 'vitest'
import SearchBar from '../components/searchBar/SearchBar'

describe('SearchInput Component', () => {
  test('renders input and button', () => {
    render(<SearchBar searchMovie='' setSearchMovie={() => {}} onSubmit={() => {}} />)

    const input = screen.getByPlaceholderText('Search movies...')
    const search = screen.getByTestId('SearchIcon')

    expect(input).toBeInTheDocument()
    expect(search).toBeInTheDocument()
  })

  test('allows typing in the search input', async () => {
    const setSearchMovie = vi.fn()
    render(<SearchBar searchMovie='' setSearchMovie={setSearchMovie} onSubmit={() => {}} />)

    const input = screen.getByPlaceholderText('Search movies...')
    await userEvent.type(input, 'star')

    expect(setSearchMovie).toHaveBeenCalled()
  })

  test('submits the form with the searched movie', async () => {
    const searchMovie = 'god'
    const onSubmit = vi.fn()
    render(<SearchBar searchMovie={searchMovie} setSearchMovie={() => {}} onSubmit={onSubmit} />)

    const search = screen.getByTestId('SearchIcon')
    await userEvent.click(search)

    expect(onSubmit).toHaveBeenCalledWith(searchMovie)
  })
})
