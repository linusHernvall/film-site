import '@testing-library/jest-dom'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { MemoryRouter } from 'react-router'
import MovieCarousel from '../components/moviecarousel/MovieCarousel'
import { ThumbnailProvider } from '../context/ThumbnailContext'

describe('MovieCarousel', () => {
  // Sets the rendered window width in the test. Makes the movies render properly.

  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 })
  Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
    configurable: true,
    value: () => ({ width: 800 }),
  })

  global.window.innerWidth = 800

  vi.mock('../../../data/movies.json', () => ({
    default: [
      {
        title: 'The Godfather: Part II',
        year: 1974,
        rating: 'R',
        actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
        genre: 'Crime, Drama',
        synopsis:
          'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg',
        isTrending: true,
      },
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        rating: 'R',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        genre: 'Drama',
        synopsis:
          'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
        isTrending: false,
      },
    ],
  }))

  test('renders a carousel with trending movies', async () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <MovieCarousel />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    await screen.findByRole('img', { name: 'The Godfather: Part II' })

    const carouselContainer = document.querySelector('.MuiBox-root.css-16ni5k9') as HTMLElement
    if (!carouselContainer) {
      throw new Error('Carousel container not found')
    }

    const shawshankImage = within(carouselContainer).queryByRole('img', {
      name: 'The Shawshank Redemption',
    })

    expect(shawshankImage).not.toBeInTheDocument()
  })

  test('renders a carousel with movies that are recommended', async () => {
    vi.spyOn(global.Math, 'random').mockReturnValue(0.1)

    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <MovieCarousel />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const recommendedMovieImage = await screen.findByRole('img', {
      name: 'The Shawshank Redemption',
    })
    expect(recommendedMovieImage).toBeInTheDocument()

    vi.restoreAllMocks()
  })

  test('thumbnail should contain year and rating of the movie', async () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <MovieCarousel />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const godfatherContainer = await (
      await screen.findByRole('img', {
        name: 'The Godfather: Part II',
      })
    ).closest('div')

    if (!godfatherContainer) {
      throw new Error('Container for The Godfather: Part II not found')
    }

    const yearElement = within(godfatherContainer).getByText(/1974/)
    expect(yearElement).toBeInTheDocument()

    const ratingElement = within(godfatherContainer).getByText(/R/)
    expect(ratingElement).toBeInTheDocument()
  })

  test('do not render the same movie twice', async () => {
    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <MovieCarousel />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    const renderedMovies = await screen.findAllByRole('img')

    const movieTitles = renderedMovies.map(img => (img as HTMLImageElement).alt)

    const uniqueMovieTitles = new Set(movieTitles)
    expect(movieTitles.length).toBe(uniqueMovieTitles.size)
  })

  test('arrows disappears when all movies are showing', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 800 })
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 })

    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <MovieCarousel />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    // queryByRole seemed to be better in this situation where I expected the arrows not to be found.
    const prevArrow = screen.queryByRole('prevArrow')
    const nextArrow = screen.queryByRole('nextArrow')

    expect(prevArrow).not.toBeInTheDocument()
    expect(nextArrow).not.toBeInTheDocument()
  })

  test('should render placeholder image if thumbnail loading fails', async () => {
    const mockedMovie = {
      title: 'The Godfather: Part II',
      year: 1974,
      rating: 'R',
      actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
      genre: 'Crime, Drama',
      synopsis:
        'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      thumbnail:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg',
      isTrending: true,
    }

    render(
      <MemoryRouter>
        <ThumbnailProvider>
          <MovieCarousel />
        </ThumbnailProvider>
      </MemoryRouter>
    )

    expect(screen.queryByAltText('Placeholder')).toBeNull()

    const image = screen.getByAltText(mockedMovie.title)
    fireEvent.error(image)

    const placeholderImage = await screen.findByAltText('Placeholder')
    expect(placeholderImage).toBeInTheDocument()
  })
})
