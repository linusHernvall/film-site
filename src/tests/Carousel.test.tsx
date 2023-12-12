import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import Carousel from '../components/carousel/Carousel'
import { ThumbnailProvider } from '../context/ThumbnailContext'

describe('Carousel', () => {
  // Sets the rendered window width in the test. Makes the movies render properly.
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 })
  Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
    configurable: true,
    value: () => ({ width: 800 }),
  })

  global.window.innerWidth = 800

  vi.mock('react', async () => {
    const actualReact = await vi.importActual('react')
    return {
      ...actualReact,
      useState: vi.fn().mockImplementation(initialState => [initialState, vi.fn()]),
    }
  })

  test('renders the full length of the movies', async () => {
    const mockVisibleMoviesCount = 3

    const mockMovies = [
      {
        title: 'Fight Club',
        year: 1999,
        rating: 'R',
        actors: ['Brad Pitt", "Edward Norton", "Helena Bonham Carter'],
        genre: 'Drama',
        synopsis:
          'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWEyZmUtZTg1ZDM1YjNhOWE4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        isTrending: true,
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        rating: 'PG',
        actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        genre: 'Action, Adventure, Fantasy',
        synopsis:
          'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        isTrending: true,
      },
      {
        title: 'City of God',
        year: 2002,
        rating: 'R',
        actors: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele'],
        genre: 'Crime, Drama',
        synopsis:
          "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      },
    ]

    render(
      <ThumbnailProvider>
        <Carousel movies={mockMovies} />
      </ThumbnailProvider>
    )

    const movieElements = await screen.getAllByRole('img')
    expect(movieElements.length).toBe(mockVisibleMoviesCount)
  })

  test('thumbnail should contain year and rating of the movie', async () => {
    const mockMovies = [
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
      },
    ]

    render(
      <ThumbnailProvider>
        <Carousel movies={mockMovies} />
      </ThumbnailProvider>
    )

    const yearElement = await screen.findByText(1994)
    expect(yearElement).toBeInTheDocument()

    const ratingElement = await screen.findByText('R')
    expect(ratingElement).toBeInTheDocument()
  })

  test('do not render the same movie twice', async () => {
    const mockMovies = [
      {
        title: 'Fight Club',
        year: 1999,
        rating: 'R',
        actors: ['Brad Pitt", "Edward Norton", "Helena Bonham Carter'],
        genre: 'Drama',
        synopsis:
          'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWEyZmUtZTg1ZDM1YjNhOWE4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        isTrending: true,
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        rating: 'PG',
        actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        genre: 'Action, Adventure, Fantasy',
        synopsis:
          'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        isTrending: true,
      },
      {
        title: 'City of God',
        year: 2002,
        rating: 'R',
        actors: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele'],
        genre: 'Crime, Drama',
        synopsis:
          "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      },
    ]

    render(
      <ThumbnailProvider>
        <Carousel movies={mockMovies} />
      </ThumbnailProvider>
    )

    const renderedMovies = await screen.findAllByRole('img')

    const movieTitles = renderedMovies.map(img => (img as HTMLImageElement).alt)

    const uniqueMovieTitles = new Set(movieTitles)
    expect(movieTitles.length).toBe(uniqueMovieTitles.size)
  })

  test('arrows disappears when all movies are showing', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 800 })
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 })
    const mockMovies = [
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
      },
    ]

    render(
      <ThumbnailProvider>
        <Carousel movies={mockMovies} />
      </ThumbnailProvider>
    )

    // queryByRole seemed to be better in this situation where I expected the arrows not to be found.
    const prevArrow = screen.queryByRole('prevArrow')
    const nextArrow = screen.queryByRole('nextArrow')

    expect(prevArrow).not.toBeInTheDocument()
    expect(nextArrow).not.toBeInTheDocument()
  })
})
