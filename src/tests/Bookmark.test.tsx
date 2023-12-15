import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import { expect, test } from 'vitest'
import Bookmarked from '../Pages/Bookmarked/Bookmarked'
import CategorySpecific from '../Pages/CategorySpecific'
import Header from '../components/Header/Header'
import { ThumbnailProvider } from '../context/ThumbnailContext'

const mockedMovie1 = {
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

const mockedMovie2 = {
  title: 'Psycho',
  year: 1960,
  rating: 'R',
  actors: ['Anthony Perkins', 'Janet Leigh', 'Vera Miles'],
  genre: 'Horror, Mystery, Thriller',
  synopsis:
    "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
  thumbnail:
    'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg',
}

describe('Bookmark functionality', () => {
  test('show a text if there are no bookmarked thumbnails on BookmarkPage', async () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <Bookmarked />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    expect(screen.getByText('You haven’t added any titles to your list yet.')).toBeInTheDocument()
  })

  // Test if it's possible to add a movie via favourite button and if it's visible on BookmarkPage
  test('should be possible to add a thumbnail and view it on BookmarkPage', async () => {
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

    expect(screen.getByText('CATEGORIES/War')).toBeInTheDocument()

    expect(screen.getByText(mockedMovie1.title)).toBeInTheDocument()

    user.click(screen.getByText('favorite'))

    const bookmarkPage = screen.getByTestId('FavoriteRoundedIcon')
    expect(bookmarkPage).toBeInTheDocument()

    user.click(bookmarkPage)

    const bookmarkPageTitle = await screen.findByText('Your List')
    expect(bookmarkPageTitle).toBeInTheDocument()

    const bookmarkedMovieTitle = await screen.findByText(mockedMovie1.title)
    expect(bookmarkedMovieTitle).toBeInTheDocument()
  })

  // Test if it's possible to add and remove a movie via favourite button and if it's rendered correctly on BookmarkPage
  test('should be possible to remove a bookmarked thumbnail and not view it on BookmarkPage after removal', async () => {
    render(
      <MemoryRouter initialEntries={['/categories/Horror']}>
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

    expect(screen.getByText('CATEGORIES/Horror')).toBeInTheDocument()

    expect(screen.getByText(mockedMovie2.title)).toBeInTheDocument()

    user.click(screen.getByText('favorite'))

    const bookmarkPageButton = screen.getByTestId('FavoriteRoundedIcon')
    expect(bookmarkPageButton).toBeInTheDocument()

    user.click(bookmarkPageButton)

    const bookmarkPageTitle = await screen.findByText('Your List')
    expect(bookmarkPageTitle).toBeInTheDocument()

    const psychoCard = screen.getByText(mockedMovie2.title).parentElement
    expect(psychoCard).toBeInTheDocument()

    const heartBtn = within(psychoCard!).getByText('favorite')

    await user.click(heartBtn)

    await waitFor(() => {
      const bookmarkedMovieYearRemoved = screen.queryByText(mockedMovie2.title)
      expect(bookmarkedMovieYearRemoved).not.toBeInTheDocument()
    })
  })
})
