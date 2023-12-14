// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { expect, test } from 'vitest'
// import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
// import { ThumbnailProvider } from '../context/BookmarkedContext'

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import Bookmarked from '../Pages/Bookmarked/Bookmarked'
import { ThumbnailProvider } from '../context/ThumbnailContext'

// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { MemoryRouter } from 'react-router'
// import { describe, expect, test } from 'vitest'
// import Bookmarked from '../Pages/Bookmarked/Bookmarked'
// import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
// import { ThumbnailProvider } from '../context/ThumbnailContext'

// // Mock movie data
// const mockedMovie = {
//   title: 'Test Movie',
//   year: 2023,
//   rating: '8.5',
//   actors: ['Actor 1', 'Actor 2'],
//   genre: 'Action',
//   synopsis: 'This is a test movie.',
//   thumbnail: 'test-image.jpg',
// }

// test('should toggle bookmark on click', async () => {
//   render(
//     <ThumbnailProvider>
//       <ThumbnailCard movie={mockedMovie} />
//     </ThumbnailProvider>
//   )
//   const user = userEvent.setup()

//   // Initial state: Not bookmarked
//   const heartIcon = screen.getByText(/favorite/i)
//   expect(heartIcon).toBeInTheDocument()
//   expect(heartIcon).toHaveStyle({ color: 'rgb(0, 0, 0)' })

//   await user.click(heartIcon)

//   expect(heartIcon).toHaveStyle({ color: 'rgb(255, 0, 0)' })
//   console.log(heartIcon)
// })

// describe('Bookmarked component', () => {
//   const mockedMovie = {
//     title: 'Test Movie',
//     year: 2023,
//     rating: '8.5',
//     actors: ['Actor 1', 'Actor 2'],
//     genre: 'Action',
//     synopsis: 'This is a test movie.',
//     thumbnail: 'test-image.jpg',
//   }

//   test('should add bookmarked thumbnail to bookmarked page', async () => {
//     render(
//       <MemoryRouter>
//         <ThumbnailProvider>
//           <ThumbnailCard movie={mockedMovie} />
//           <Bookmarked />
//         </ThumbnailProvider>
//       </MemoryRouter>
//     )

//     const bookmarkButton = screen.getByAltText('favorite')
//     userEvent.click(bookmarkButton)

//     // Check if the bookmarked movie year is in the DOM
//     const bookmarkedMovieYear = screen.getByText(mockedMovie.year)
//     expect(bookmarkedMovieYear).toBeInTheDocument()

//     render(
//       <MemoryRouter>
//         <ThumbnailProvider>
//           <Bookmarked />
//         </ThumbnailProvider>
//       </MemoryRouter>
//     )

import userEvent from '@testing-library/user-event'
import { Route, Routes } from 'react-router'
import Categories from '../Pages/Categories'
import CategorySpecific from '../Pages/CategorySpecific'
import Header from '../components/Header/Header'

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

test('should be possible to reloag page and still see bookmarked movie', async () => {
  render(
    <MemoryRouter initialEntries={['/categories/War']}>
      <ThumbnailProvider>
        <Header />
        <Routes>
          <Route path='/categories/:genre' element={<CategorySpecific />} />
          <Route path='/categories/' element={<Categories />} />
          <Route path='/bookmarked' element={<Bookmarked />} />
        </Routes>
      </ThumbnailProvider>
    </MemoryRouter>
  )
  const user = userEvent.setup()

  // Find title
  expect(screen.getByText('CATEGORIES/War')).toBeInTheDocument()
  expect(screen.getByText(mockedMovie1.title)).toBeInTheDocument()
  // Bookmark movie
  user.click(screen.getByText('favorite'))
  // Navigate to bookmark-page
  const bookmarkPage = screen.getByTestId('FavoriteRoundedIcon')
  expect(bookmarkPage).toBeInTheDocument()
  user.click(bookmarkPage)

  // Find bookmark page title
  const bookmarkPageTitle = await screen.findByText('Your List')
  expect(bookmarkPageTitle).toBeInTheDocument()

  // Wait to fins bookmarked movie
  const bookmarkedMovieTitle = await screen.findByText(mockedMovie1.title)
  expect(bookmarkedMovieTitle).toBeInTheDocument()

  // Re render app
  render(
    <MemoryRouter initialEntries={['/categories/War']}>
      <ThumbnailProvider>
        <Header />
        <Routes>
          <Route path='/bookmarked' element={<Bookmarked />} />
        </Routes>
      </ThumbnailProvider>
    </MemoryRouter>
  )

  // Check if the text is still there after "refreshing" the page
  const bookmarkedMovieTitleAfterRefresh = screen.queryByText(mockedMovie1.title)
  expect(bookmarkedMovieTitleAfterRefresh).toBeInTheDocument()
})
