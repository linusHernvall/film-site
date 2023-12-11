import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, test } from 'vitest'
import Categories from '../Pages/Categories'
import CategorySpecific from '../Pages/CategorySpecific'

describe('Categories', () => {
  test('should render categories title', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    )

    //
    const titleElement = screen.getByText('CATEGORIES')
    expect(titleElement).toBeInTheDocument()
  })

  test('should navigate to the drama category page when clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/categories']}>
        <Routes>
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:genre' element={<CategorySpecific />} />
        </Routes>
      </MemoryRouter>
    )

    // Click on link with text Drama
    const categoryBox = screen.getByRole('link', { name: 'Drama' })
    userEvent.click(categoryBox)

    // Find title Drama on category specific page
    await waitFor(() => {
      const categoryTitle = screen.getByText('CATEGORIES/Drama')
      expect(categoryTitle).toBeInTheDocument()
    })
  })
})
