import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import movies from '../../data/movies.json'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'

function CategorySpecific() {
  const { genre } = useParams<{ genre: string }>()

  const moviesByGenre = genre ? movies.filter(movie => movie.genre.includes(genre)) : []

  return (
    <Box display='flex' justifyContent='flex-start' flexDirection='column' alignItems='center'>
      <Box display='flex' alignItems='center'>
        <Typography variant='h1' margin='3rem'>
          CATEGORIES/{genre}{' '}
        </Typography>{' '}
      </Box>

      <Box width='100%' display='flex' justifyContent='flex-start'></Box>
      <Box display='flex' justifyContent='center' flexWrap='wrap' gap='24px'>
        {moviesByGenre.map(movie => (
          <ThumbnailCard key={movie.title} movie={movie} />
        ))}
      </Box>
    </Box>
  )
}

export default CategorySpecific
