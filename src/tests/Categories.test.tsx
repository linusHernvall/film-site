import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Categories from '../Pages/Categories'

describe('Categories', () => {
  test('should render categories title', () => {
    render(<Categories />)
    const titleElement = screen.getByText('CATEGORIES')
    expect(titleElement).toBeInTheDocument()
  })

  test('should render a category called drama', () => {
    render(<Categories />)
    const dramaCategory = screen.getByRole('heading', { name: 'Drama' })
    expect(dramaCategory).toBeInTheDocument()
  })
})
