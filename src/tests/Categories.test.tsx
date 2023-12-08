import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import Categories from '../Pages/Categories'

describe('Categories', () => {
  test('should render categories title', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    )
    const titleElement = screen.getByText('CATEGORIES')
    expect(titleElement).toBeInTheDocument()
  })

  test('should render a category called drama', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    )
    const dramaCategory = screen.getByRole('heading', { name: 'Drama' })
    expect(dramaCategory).toBeInTheDocument()
  })

  test('should navigate to the drama category page when clicked', async () => {
    //   render(
    //     <MemoryRouter initialEntries={['/categories']}>
    //       <Routes>
    //         <Route path='/categories' Component={Categories} />
    //         <Route path='/categories/drama' Component={CategorySpecific} />
    //       </Routes>
    //     </MemoryRouter>
    //   )
    //   const categoryBox = screen.getByRole('heading', { name: 'Drama' })
    //   userEvent.click(categoryBox)
    //   await waitFor(() => {
    //     expect(window.location.pathname).toBe('/categories/Drama')
    //   })
  })
})
