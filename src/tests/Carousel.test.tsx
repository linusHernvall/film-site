import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Carousel from '../components/carousel/Carousel'

describe('Carousel', () => {
  test.only('thumbnail should contain year and rating of the movie', async () => {
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

    render(<Carousel movies={mockMovies} />)

    // I used new RegExp to ensure to find my mocked up data in the component. It seems like the rendered text in the DOM differed from the component.
    for (const movie of mockMovies) {
      const yearElement = await screen.findByText(new RegExp(movie.year.toString(), 'i'))
      expect(yearElement).toBeInTheDocument()

      const ratingElement = await screen.findByText(new RegExp(movie.rating, 'i'))
      expect(ratingElement).toBeInTheDocument()
    }
  })

  test('placeholder on broken thumbnail', async () => {
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
    ]
    render(<Carousel movies={mockMovies} />)

    const fightClubImage = (await screen.findByAltText('Fight Club')) as HTMLImageElement
    expect(fightClubImage).toBeInTheDocument()

    fireEvent.error(fightClubImage)
    expect(fightClubImage.src).toContain('error.png')
  })
})
