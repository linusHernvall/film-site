import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Carousel from '../components/carousel/Carousel'

describe('Carousel', () => {
  test('thumbnail should contain year and rating of the movie', () => {
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
    mockMovies.forEach(async movie => {
      expect(await screen.findByText(new RegExp(movie.year.toString(), 'i'))).toBeInTheDocument()
      expect(await screen.findByText(new RegExp(movie.rating, 'i'))).toBeInTheDocument()
    })
  })
})
