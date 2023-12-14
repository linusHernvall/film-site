import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import MovieCard from '../components/MovieCard/MovieCard'
import { ThumbnailProvider } from '../context/ThumbnailContext'

// Mock movie data
const mockMovie = {
  title: 'Test Movie',
  year: 2023,
  rating: '8.5',
  actors: ['Actor 1', 'Actor 2'],
  genre: 'Action',
  synopsis: 'This is a test movie.',
  thumbnail: 'test-image.jpg',
}

test('renders MovieCard component correctly', async () => {
  const { getByText, getByAltText } = render(
    <MemoryRouter>
      <ThumbnailProvider>
        <MovieCard movie={mockMovie} />
      </ThumbnailProvider>
    </MemoryRouter>
  )

  // Check if movie title, genre, and year are rendered
  expect(getByText(mockMovie.title)).toBeInTheDocument()
  expect(getByText(`Genre: ${mockMovie.genre}`)).toBeInTheDocument()
  const yearLabel = getByText(/Year:/)
  expect(yearLabel).toBeInTheDocument()

  const yearValue = getByText(mockMovie.year.toString())
  expect(yearValue).toBeInTheDocument()

  // Check if rating and actors are rendered
  expect(getByText('Rating:')).toBeInTheDocument()
  expect(getByText(mockMovie.rating.toString())).toBeInTheDocument()
  expect(getByText('Cast:')).toBeInTheDocument()
  expect(getByText(mockMovie.actors.join(', '))).toBeInTheDocument()

  // Check if synopsis is rendered
  expect(getByText(mockMovie.synopsis)).toBeInTheDocument()

  // Check if the movie poster is rendered
  const moviePoster = getByAltText('Movie Poster')
  expect(moviePoster).toBeInTheDocument()
  expect(moviePoster).toHaveAttribute('src', mockMovie.thumbnail)

  // Check if bookmark-icon is rendered
  const heartIcon = screen.getByTestId('FavoriteBorderIcon')
  expect(heartIcon).toBeInTheDocument()
})
