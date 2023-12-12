// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { expect, test } from 'vitest'
// import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
// import { ThumbnailProvider } from '../context/BookmarkedContext'

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

//     // Check if the bookmarked movie year is still in the DOM after refresh
//     const refreshedBookmarkedMovieYear = screen.getByText(mockedMovie.year)
//     expect(refreshedBookmarkedMovieYear).toBeInTheDocument()
//   })
// })
