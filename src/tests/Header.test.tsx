import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import Categories from '../Pages/Categories'
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

  test.only('should render Categories-link and navigate to Categories page', async () => {
    render(
      <MemoryRouter>
        <Header />
        <Categories />
      </MemoryRouter>
    )

    // Find the Categories link
    const categoriesLink = screen.getByText('CATEGORIES')

    // Simulate a click on the link
    fireEvent.click(categoriesLink)

    // Wait for the navigation to occur
    await waitFor(() => {
      // Check if the current pathname is '/categories'
      expect(window.location.pathname).toBe('/categories')
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
})
