import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import moviesData from '../../../data/movies.json'
import { Movie } from '../../interface/interfaces'
import { CategoryBox } from './style'

function CategoryGallery() {
  const allGenres: string[] = moviesData.flatMap((movie: Movie) => movie.genre.split(','))
  const uniqueGenres: string[] = Array.from(new Set(allGenres.map((genre: string) => genre.trim())))

  return (
    <Box display='flex' justifyContent='center' flexWrap='wrap'>
      {uniqueGenres.map((genre: string, index: number) => (
        <Box key={index} p={0.5} display='flex'>
          <Link
            to={`/categories/${encodeURIComponent(genre)}`}
            color='inherit'
            style={{
              textDecoration: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <CategoryBox>
              <Typography variant='h5' role='heading' component='span'>
                {genre}
              </Typography>
            </CategoryBox>
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default CategoryGallery
