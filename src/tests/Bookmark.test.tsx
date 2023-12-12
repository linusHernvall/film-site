import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import Bookmarked from '../Pages/Bookmarked/Bookmarked'
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

test.only('should add bookmarked thumbnail to bookmarked page', async () => {
  render(
    <MemoryRouter>
      <ThumbnailProvider>
        <ThumbnailCard movie={mockedMovie} />
        <Bookmarked />
      </ThumbnailProvider>
    </MemoryRouter>
  )
  const user = userEvent.setup()

  const bookmarkButton = screen.getByText('favorite')
  user.click(bookmarkButton)

  const bookmarkedMovieYear = screen.getByText(mockedMovie.year)
  expect(bookmarkedMovieYear).toBeInTheDocument()
})

// test.only('should remove bookmarked thumbnail on bookmarked page', async () => {
//   render(
//     <MemoryRouter>
//       <ThumbnailProvider>
//         <ThumbnailCard movie={mockedMovie} />
//         <Bookmarked />
//       </ThumbnailProvider>
//     </MemoryRouter>
//   )
//   const user = userEvent.setup()

//   const bookmarkButton = screen.getByText('favorite')
//   user.click(bookmarkButton)

//   const bookmarkedMovieYear = screen.getByText(mockedMovie.year)
//   expect(bookmarkedMovieYear).toBeInTheDocument()

//   user.click(bookmarkButton)

//   await waitFor(() => {
//     const bookmarkedMovieYear2 = screen.queryByText(mockedMovie.year)
//     expect(bookmarkedMovieYear2).not.toBeInTheDocument()
//   })
// })
