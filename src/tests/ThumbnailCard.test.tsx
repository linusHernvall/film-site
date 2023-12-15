import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
import { ThumbnailProvider } from '../context/ThumbnailContext'

describe('ThumbnailCard tests', () => {
  const mockedMovie = {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 'R',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    genre: 'Drama',
    synopsis:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
  }

  test('should render ThumbnailCard with rating', () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <ThumbnailCard movie={mockedMovie} />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const ratingElement = screen.getByText('R')
    expect(ratingElement).toBeInTheDocument()
  })

  test('should render ThumbnailCard with year', () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <ThumbnailCard movie={mockedMovie} />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const yearElement = screen.getByText(1994)
    expect(yearElement).toBeInTheDocument()
  })

  test('should render ThumbnailCard with thumbnail alt title', () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <ThumbnailCard movie={mockedMovie} />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const imageTitle = screen.getByAltText(mockedMovie.title)
    expect(imageTitle).toBeInTheDocument()
  })

  test('should render ThumbnailCard with thumbnail image', () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <ThumbnailCard movie={mockedMovie} />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('src', mockedMovie.thumbnail)
  })

  test('should render ThumbnailCard with placeholder image if error', async () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <ThumbnailCard movie={mockedMovie} />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const originalImage = screen.getByRole('img')
    expect(originalImage).toHaveAttribute('src', mockedMovie.thumbnail)

    fireEvent.error(originalImage)

    const placeholderImage = await screen.findByAltText('The Shawshank Redemption')
    expect(placeholderImage).toHaveAttribute('src', '/placeholder.png')
  })
})
