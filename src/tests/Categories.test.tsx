import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import Categories from '../Pages/Categories'
// import CategorySpecific from '../Pages/CategorySpecific'
// import MovieCard from '../components/MovieCard/MovieCard'

describe('Categories', () => {
  test('should render categories title', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    )

    //
    const titleElement = screen.getByText('CATEGORIES')
    expect(titleElement).toBeInTheDocument()
  })

  // test('should navigate to the drama category page when clicked', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/categories']}>
  //       <Routes>
  //         <Route path='/categories' element={<Categories />} />
  //         <Route path='/categories/:genre' element={<CategorySpecific />} />
  //       </Routes>
  //     </MemoryRouter>
  //   )

  //   // Click on link with text Drama
  //   const categoryBox = screen.getByRole('link', { name: 'Drama' })
  //   userEvent.click(categoryBox)

  //   // Find title Drama on category specific page
  //   await waitFor(() => {
  //     const categoryTitle = screen.getByText('CATEGORIES/Drama')
  //     expect(categoryTitle).toBeInTheDocument()
  //   })
  // })

  // test('should navigate to correct movie card when clicking on a movie', async () => {
  //   const mockMovie = {
  //     title: '12 ANGRY MEN',
  //     year: 1957,
  //     rating: 'Not Rated',
  //     actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
  //     genre: 'Crime, Drama',
  //     synopsis:
  //       'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  //     thumbnail:
  //       'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
  //   }
  //   render(
  //     <MemoryRouter initialEntries={['/categories']}>
  //       <Routes>
  //         <Route path='/categories' element={<Categories />} />
  //         <Route path='/categories/:genre' element={<CategorySpecific />} />
  //         <Route path='/filmview/:title' element={<MovieCard movie={mockMovie} />} />
  //       </Routes>
  //     </MemoryRouter>
  //   )

  //   // Click on link with text Drama
  //   const categoryBox = screen.getByRole('link', { name: 'Drama' })
  //   userEvent.click(categoryBox)

  //   // Find title Drama on category specific page
  //   await waitFor(() => {
  //     const categoryTitle = screen.getByText('CATEGORIES/Drama')
  //     expect(categoryTitle).toBeInTheDocument()
  //   })
  //   //  Click on image with movie 12 Angry Men
  //   const TitleText = screen.getByAltText('12 Angry Men')
  //   userEvent.click(TitleText)
  //   // Find 12 angry men - title on filmview-page
  //   await waitFor(() => {
  //     const littleTitle = screen.getByText('12 ANGRY MEN')
  //     expect(littleTitle).toBeInTheDocument()
  //   })
  // })
})
