import { Box, Typography } from '@mui/material'
import moviesData from '../../data/movies.json'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'

function Bookmarked() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h1'>Bookmarked page</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
          padding: '2rem'
        }}
      >
        {moviesData.map((movie, index) => (
          <ThumbnailCard key={index} movie={movie} />
        ))}
      </Box>
    </div>
  )
}

export default Bookmarked
