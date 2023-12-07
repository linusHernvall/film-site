import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import MovieCarousel from '../components/movieCarousel/MovieCarousel'

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
        isTrending: false,
      },
    ],
  }))

  test.skip('displays a carousel with movies that are trending', async () => {
    render(<MovieCarousel />)
    screen.debug()

    const starWarsImage = await screen.findByRole('img', {
      name: 'Star Wars: Episode V - The Empire Strikes Back',
    })
    expect(starWarsImage).toBeInTheDocument()

    const cityOfGodImage = screen.queryByRole('img', { name: 'City of God' })
    expect(cityOfGodImage).not.toBeInTheDocument()
  })
})
