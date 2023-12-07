import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ThumbnailCard from '../components/thumbnailCard/thumbnailCard'

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
    render(<ThumbnailCard movie={mockedMovie} />)

    const ratingElement = screen.getByText('R')
    expect(ratingElement).toBeInTheDocument()
  })

  test('should render ThumbnailCard with year', () => {
    render(<ThumbnailCard movie={mockedMovie} />)

    const yearElement = screen.getByText(1994)
    expect(yearElement).toBeInTheDocument()
  })

  test('should render ThumbnailCard with thumbnail image', () => {
    render(<ThumbnailCard movie={mockedMovie} />)

    const imageTitle = screen.getByAltText(mockedMovie.title)
    expect(imageTitle).toBeInTheDocument()

    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('src', mockedMovie.thumbnail)
  })

  test('should render ThumbnailCard with placeholder image if error', () => {
    render(<ThumbnailCard movie={mockedMovie} />)

    const originalImage = screen.getByAltText(mockedMovie.title);
    expect(originalImage).toBeInTheDocument();

    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('src', mockedMovie.thumbnail)

    fireEvent.error(originalImage);

    // Rerender the component to reflect the updated state after the error
    render(<ThumbnailCard movie={mockedMovie} />);

    // Check that the placeholder image is visible
    const placeholderImage = screen.getByAltText('Placeholder');
    expect(placeholderImage).toBeInTheDocument();
  })
})
