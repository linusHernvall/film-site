import { Box, Typography } from '@mui/material'
import CategoryGallery from '../components/Categories/CategoryGallery'

function Categories() {
  return (
    <Box display='flex' justifyContent='flex-start' flexDirection='column' alignItems='center'>
      <Typography variant='h1' margin='3rem'>
        CATEGORIES
      </Typography>
      <CategoryGallery />
    </Box>
  )
}

export default Categories
