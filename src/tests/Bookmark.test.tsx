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

test.only('should be possible to add bookmarked thumbnail to bookmarked page', async () => {
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
  const user = userEvent.setup();

  expect(screen.getByText('CATEGORIES/War')).toBeInTheDocument();

  expect(screen.getByText(mockedMovie.year)).toBeInTheDocument();

  user.click(screen.getByText('favorite'));

  const bookmarkPage = screen.getByTestId('FavoriteRoundedIcon');
  expect(bookmarkPage).toBeInTheDocument();

  user.click(bookmarkPage);

  const bookmarkPageTitle = await screen.findByText('Your List');
  expect(bookmarkPageTitle).toBeInTheDocument();

  const bookmarkedMovieYear = await screen.findByText(mockedMovie.year);
  expect(bookmarkedMovieYear).toBeInTheDocument();
})

test.only('should be possible to remove bookmarked thumbnail on bookmarked page', async () => {
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
  const user = userEvent.setup();

  expect(screen.getByText('CATEGORIES/War')).toBeInTheDocument();

  expect(screen.getByText(mockedMovie.year)).toBeInTheDocument();

  user.click(screen.getByText('favorite'));

  const bookmarkPageButton = screen.getByTestId('FavoriteRoundedIcon');
  expect(bookmarkPageButton).toBeInTheDocument();

  user.click(bookmarkPageButton);

  const bookmarkPageTitle = await screen.findByText('Your List');
  expect(bookmarkPageTitle).toBeInTheDocument();

  const bookmarkedMovieYear = await screen.findByText(mockedMovie.year);
  expect(bookmarkedMovieYear).toBeInTheDocument();

  user.click(screen.getByText('favorite'));

  await waitFor(() => {
    const removedMovie = screen.queryByText(mockedMovie.year);
    expect(removedMovie).toBeInTheDocument();
  });
})
