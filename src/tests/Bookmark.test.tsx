import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
import { ThumbnailProvider } from '../context/ThumbnailContext'

// Mock movie data
const mockedMovie = {
  title: 'Test Movie',
  year: 2023,
  rating: '8.5',
  actors: ['Actor 1', 'Actor 2'],
  genre: 'Action',
  synopsis: 'This is a test movie.',
  thumbnail: 'test-image.jpg',
}

test('should toggle bookmark on click', async () => {
  render(
    <MemoryRouter>
      <ThumbnailProvider>
        <ThumbnailCard movie={mockedMovie} />
      </ThumbnailProvider>
    </MemoryRouter>
  )
  const user = userEvent.setup()

  // Initial state: Not bookmarked
  const heartIcon = screen.getByText(/favorite/i)
  expect(heartIcon).toBeInTheDocument()
  expect(heartIcon).toHaveStyle({ color: 'rgb(0, 0, 0)' })

  await user.click(heartIcon)

  expect(heartIcon).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  console.log(heartIcon)
})
