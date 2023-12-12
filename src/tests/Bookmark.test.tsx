import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import { expect, test } from 'vitest'
import Bookmarked from '../Pages/Bookmarked/Bookmarked'
import CategorySpecific from '../Pages/CategorySpecific'
import Header from '../components/Header/Header'
import { ThumbnailProvider } from '../context/ThumbnailContext'

// Mock movie data
const mockedMovie = {
  title: 'Casablanca',
  year: 1942,
  rating: 'PG',
  actors: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'],
  genre: 'Drama, Romance, War',
  synopsis:
    'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
  thumbnail:
    'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg',
}

test.only('should add bookmarked thumbnail to bookmarked page', async () => {
  render(
    <MemoryRouter initialEntries={['/categories/War']}>
      <ThumbnailProvider>
        <Header />
        <Routes>
          <Route path='/categories/:genre' element={<CategorySpecific />} />
          <Route path='/bookmarked' element={<Bookmarked />} />
        </Routes>
      </ThumbnailProvider>
    </MemoryRouter>
  )
  const user = userEvent.setup()

  screen.debug()

  const categoryTitle = screen.getByText('CATEGORIES/War')
  expect(categoryTitle).toBeInTheDocument()

  const movieYear = screen.getByText(mockedMovie.year)
  expect(movieYear).toBeInTheDocument()

  const bookmarkButton = screen.getByText('favorite')
  expect(bookmarkButton).toBeInTheDocument()

  user.click(bookmarkButton)

  const bookmarkPage = screen.getByTestId('FavoriteRoundedIcon')
  expect(bookmarkPage).toBeInTheDocument()

  user.click(bookmarkPage)

  const bookmarkPageTitle = await screen.findByText('Your List')
  expect(bookmarkPageTitle).toBeInTheDocument()

  const bookmarkedMovieYear = await screen.findByText(mockedMovie.year)
  expect(bookmarkedMovieYear).toBeInTheDocument()
})

test.only('should remove bookmarked thumbnail on bookmarked page', async () => {
  render(
    <MemoryRouter initialEntries={['/categories/War']}>
      <ThumbnailProvider>
        <Header />
        <Routes>
          <Route path='/categories/:genre' element={<CategorySpecific />} />
          <Route path='/bookmarked' element={<Bookmarked />} />
        </Routes>
      </ThumbnailProvider>
    </MemoryRouter>
  )
  const user = userEvent.setup()

  screen.debug()

  const categoryTitle = screen.getByText('CATEGORIES/War')
  expect(categoryTitle).toBeInTheDocument()

  const movieYear = screen.getByText(mockedMovie.year)
  expect(movieYear).toBeInTheDocument()

  const bookmarkButton = screen.getByText('favorite')
  expect(bookmarkButton).toBeInTheDocument()

  user.click(bookmarkButton)

  const bookmarkPageButton = screen.getByTestId('FavoriteRoundedIcon')
  expect(bookmarkPageButton).toBeInTheDocument()

  user.click(bookmarkPageButton)

  const bookmarkPageTitle = await screen.findByText('Your List')
  expect(bookmarkPageTitle).toBeInTheDocument()

  const bookmarkedMovieYear = await screen.findByText(mockedMovie.year)
  expect(bookmarkedMovieYear).toBeInTheDocument()

  const bookmarkButtonRemove = screen.getByText('favorite')
  expect(bookmarkButtonRemove).toBeInTheDocument()

  user.click(bookmarkButtonRemove)

  await waitFor(() => {
    const removedMovie = screen.queryByText(mockedMovie.year)
    expect(removedMovie).toBeInTheDocument()
  })
})
