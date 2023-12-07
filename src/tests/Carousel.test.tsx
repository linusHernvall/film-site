import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import Carousel from '../components/carousel/Carousel'

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

    render(<Carousel movies={mockMovies} />)

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

    render(<Carousel movies={mockMovies} />)

    // I used new RegExp to ensure to find my mocked up data in the component. It seems like the rendered text in the DOM differed from the component.
    for (const movie of mockMovies) {
      const yearElement = await screen.findByText(new RegExp(movie.year.toString(), 'i'))
      expect(yearElement).toBeInTheDocument()

      const ratingElement = await screen.findByText(new RegExp(movie.rating, 'i'))
      expect(ratingElement).toBeInTheDocument()
    }
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

    render(<Carousel movies={mockMovies} />)

    const renderedImages = await screen.findAllByRole('img')

    const movieTitles = renderedImages.map(img => (img as HTMLImageElement).alt)

    const uniqueMovieTitles = new Set(movieTitles)
    expect(movieTitles.length).toBe(uniqueMovieTitles.size)
  })
})

// describe('MovieCarousel', () => {
//   // Sets the rendered window width in the test.
//   Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 })
//   Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
//     configurable: true,
//     value: () => ({ width: 800 }),
//   })

//   global.window.innerWidth = 800

// const mockMovies = [
//   {
//     title: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//     rating: 'PG',
//     actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
//     genre: 'Action, Adventure, Fantasy',
//     synopsis:
//       'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
//     thumbnail:
//       'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
//     isTrending: true,
//   },
//   {
//     title: 'City of God',
//     year: 2002,
//     rating: 'R',
//     actors: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele'],
//     genre: 'Crime, Drama',
//     synopsis:
//       "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
//     thumbnail:
//       'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
//     isTrending: false,
//   },
// ]

//   test.only('displays a carousel with movies that are trending', async () => {
//     render(<Carousel movies={mockMovies} />)
//     screen.debug()

//     const starWarsImage = await screen.findByRole('img', {
//       name: 'Star Wars: Episode V - The Empire Strikes Back',
//     })
//     expect(starWarsImage).toBeInTheDocument()

//     const cityOfGodImage = await screen.findByRole('img', {
//       name: 'City of God',
//     })
//     expect(cityOfGodImage).not.toBeInTheDocument()
//   })
// })

// Titta så antalet kort inte renderas om kortet redan har visats i karusellen

// Can't make this work. Render is not testing the incorrect thumbnail.
// test('placeholder on broken thumbnail', async () => {
//   Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 500 })
//   Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
//     configurable: true,
//     value: () => ({ width: 500 }),
//   })
//   const mockMovies = [
//     {
//       title: 'Fight Club',
//       year: 1999,
//       rating: 'R',
//       actors: ['Brad Pitt", "Edward Norton", "Helena Bonham Carter'],
//       genre: 'Drama',
//       synopsis:
//         'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
//       thumbnail:
//         'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWEyZmUtZTg1ZDM1YjNhOWE4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
//       isTrending: true,
//     },
//   ]
//   render(<Carousel movies={mockMovies} />)
//   screen.debug()

//   const fightClubImages = await screen.findAllByAltText('Fight Club')
//   console.log(fightClubImages)
//   expect(fightClubImages[0]).toBeInTheDocument()

//   fireEvent.error(fightClubImages[0])
//   expect(fightClubImages[0]).toContain('error.png')
// })
