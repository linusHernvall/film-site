import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import movieData from '../../../data/movies.json'
import { Movie } from '../../interface/interfaces'
import Carousel from '../carousel/Carousel'

function MovieCarousel() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([])

  useEffect(() => {
    const trending = movieData.filter(movie => movie.isTrending)
    const recommended = movieData.filter(movie => !movie.isTrending)

    setTrendingMovies(trending)
    setRecommendedMovies(recommended)
  }, [])

  return (
    <div>
      <Typography variant='h6'>Trending</Typography>
      <Carousel movies={trendingMovies} />

      <Typography variant='h6'>Recommended for you</Typography>
      <Carousel movies={recommendedMovies} />
    </div>
  )
}

export default MovieCarousel
