import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import App from '../App.tsx'
import Bookmarked from '../Pages/Bookmarked/Bookmarked'
import Categories from '../Pages/Categories.tsx'
import HomePage from '../Pages/HomePage.tsx'
import Header from '../components/Header/Header'
import { ThumbnailProvider } from '../context/ThumbnailContext'

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
      <MemoryRouter initialEntries={['/']}>
        <ThumbnailProvider>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const categoriesLink = screen.getByText('CATEGORIES')
    userEvent.click(categoriesLink)

    await waitFor(() => {
      const categoriesLink = screen.getByText('CATEGORIES')
      expect(categoriesLink).toBeInTheDocument()
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

  test.only('should navigate to /bookmarked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThumbnailProvider>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/bookmarked' element={<Bookmarked />} />
          </Routes>
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const heartIcon = screen.getByTestId('FavoriteRoundedIcon')
    expect(heartIcon).toBeInTheDocument()

    userEvent.click(heartIcon)

    await waitFor(() => {
      const bookmarkHeader = screen.getByText('Your List')
      expect(bookmarkHeader).toBeInTheDocument()
    })
  })
})
