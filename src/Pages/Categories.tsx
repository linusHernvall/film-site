import { Box, Typography } from '@mui/material'
import CategoryGallery from '../components/Categories/CategoryGallery'

function Categories() {
  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Typography variant='h1' margin='2rem'>
        CATEGORIES
      </Typography>
      <CategoryGallery />
    </Box>
  )
}

export default Categories
