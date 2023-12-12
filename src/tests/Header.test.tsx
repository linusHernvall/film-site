import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    const categoriesLink = screen.getByText('CATEGORIES')
    expect(categoriesLink).toBeInTheDocument()
  })

  test('should navigate to /categories', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const categoriesLink = screen.getByText('CATEGORIES')
    userEvent.click(categoriesLink)

    await waitFor(() => {
      const categoryTitle = screen.getByText('CATEGORIES')
      expect(categoryTitle).toBeInTheDocument()
    })
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
