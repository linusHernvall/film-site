import { Typography } from '@mui/material'
import MovieCarousel from '../components/moviecarousel/MovieCarousel'

function HomePage() {
  return (
    <div>
      <Typography variant='h1'>Home Page</Typography>
      <MovieCarousel />
    </div>
  )
}

export default HomePage
