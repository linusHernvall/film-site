import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import movieData from '../../../data/movies.json'
import { Movie } from '../../interface/interfaces'
import Carousel from '../carousel/Carousel'
import { Container } from './style'

function MovieCarousel() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([])

  useEffect(() => {
    const trending = movieData.filter(movie => movie.isTrending)

    const nonTrending = movieData.filter(movie => !movie.isTrending)

    const shuffledNonTrending = nonTrending.sort(() => 0.5 - Math.random())

    const recommended = shuffledNonTrending.slice(0, 10)

    setTrendingMovies(trending)
    setRecommendedMovies(recommended)
  }, [])

  return (
    <Container sx={{ gap: '80px' }}>
      <Container sx={{ gap: '16px' }}>
        <Typography variant='h6'>Trending</Typography>
        <Carousel movies={trendingMovies} />
      </Container>

      <Container sx={{ gap: '16px' }}>
        <Typography variant='h6'>Recommended for you</Typography>
        <Carousel movies={recommendedMovies} />
      </Container>
    </Container>
  )
}

export default MovieCarousel
