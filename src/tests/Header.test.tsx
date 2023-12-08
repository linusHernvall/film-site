import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import Header from '../components/Header/Header'

describe('Header', () => {
  test('should render logotype', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const titleElement = screen.getByText('NETFLAX')
    expect(titleElement).toBeInTheDocument()
  })

  test('should render Categories-link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const titleElement = screen.getByText('CATEGORIES')
    expect(titleElement).toBeInTheDocument()
  })

  test('should render bookmark-icon', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const heartIcon = screen.getByTestId('FavoriteRoundedIcon')
    expect(heartIcon).toBeInTheDocument()
  })
})
