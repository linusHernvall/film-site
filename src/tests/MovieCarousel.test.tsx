// TO BE CONTINUED...

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import MovieCarousel from '../components/movieCarousel/MovieCarousel'
import { ThumbnailProvider } from '../context/BookmarkedContext'

describe('MovieCarousel', () => {
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

  test('renders a carousel with movies that are trending', async () => {
    render(
      <ThumbnailProvider>
        <MovieCarousel />
      </ThumbnailProvider>
    )

    const godfather2Image = await screen.findByRole('img', {
      name: 'The Godfather: Part II',
    })
    expect(godfather2Image).toBeInTheDocument()

    const shawShankRedemptionImage = screen.queryByRole('img', { name: 'The Shawshank Redemption' })
    expect(shawShankRedemptionImage).not.toBeInTheDocument()
  })

  test('renders a carousel with movies that are recommended', async () => {
    vi.spyOn(global.Math, 'random').mockReturnValue(0.1)

    render(
      <ThumbnailProvider>
        <MovieCarousel />
      </ThumbnailProvider>
    )

    const recommendedMovieImage = await screen.findByRole('img', {
      name: 'The Shawshank Redemption',
    })
    expect(recommendedMovieImage).toBeInTheDocument()

    vi.restoreAllMocks()
  })
})
