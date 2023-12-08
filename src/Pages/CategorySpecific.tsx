import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

function CategorySpecific() {
  const { genre } = useParams<{ genre: string }>()

  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Typography variant='h1' margin='2rem'>
        CATEGORIES
      </Typography>
      <Box width='100%' display='flex' justifyContent='flex-start'>
        <Typography variant='h5' p={3} className='Genre'>
          {genre}
        </Typography>
      </Box>
    </Box>
  )
}

export default CategorySpecific
