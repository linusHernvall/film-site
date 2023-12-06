import { Box, Typography } from '@mui/material'
import moviesData from '../../../data/movies.json'
import { CategoryBox } from './style'

interface Movie {
  title: string
  year: number
  rating: string
  actors: string[]
  genre: string
  synopsis: string
  thumbnail: string
  isTrending?: boolean
}

const CategoryGallery = () => {
  const allGenres: string[] = moviesData.flatMap((movie: Movie) => movie.genre.split(','))
  const uniqueGenres: string[] = Array.from(new Set(allGenres.map((genre: string) => genre.trim())))

  return (
    <Box display='flex' justifyContent='center' flexWrap='wrap'>
      {uniqueGenres.map((genre: string, index: number) => (
        <Box key={index} p={0.5} display='flex'>
          <CategoryBox>
            <Typography variant='h5'>{genre}</Typography>
          </CategoryBox>
        </Box>
      ))}
    </Box>
  )
}

export default CategoryGallery
