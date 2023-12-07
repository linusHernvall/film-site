import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import MovieCarousel from '../components/movieCarousel/MovieCarousel'

vi.mock('../../../data/movies.json', () => ({
  default: [
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      isTrending: true,
      thumbnail:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    },
    {
      title: 'The Godfather: Part II',
      isTrending: true,
      thumbnail:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg',
    },
    {
      title: 'The Godfather',
      isTrending: false,
      thumbnail:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg',
    },
  ],
}))

describe('MovieCarousel', () => {
  test('displays a carousel with movies that are trending', async () => {
    render(<MovieCarousel />)
    screen.debug()

    const starWarsImage = await screen.findByRole('img', {
      name: 'Star Wars: Episode V - The Empire Strikes Back',
    })
    const godfather2Image = await screen.findByRole('img', { name: 'The Godfather: Part II' })

    expect(starWarsImage).toBeInTheDocument()
    expect(godfather2Image).toBeInTheDocument()

    const godfatherImage = screen.queryByRole('img', { name: 'The Godfather' })
    expect(godfatherImage).not.toBeInTheDocument()
  })
})
