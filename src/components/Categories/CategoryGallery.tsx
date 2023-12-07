import { Box, Link as MuiLink, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
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
          <CategoryBox>
            <MuiLink
              component={RouterLink}
              to={`/categories/${encodeURIComponent(genre)}`}
              underline='none'
              color='inherit'
              sx={{
                backgroundColor: 'transparent',
              }}
            >
              <Typography variant='h5' component='span'>
                {genre}
              </Typography>
            </MuiLink>
          </CategoryBox>
        </Box>
      ))}
    </Box>
  )
}

export default CategoryGallery
