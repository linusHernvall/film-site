import { Typography } from '@mui/material'
import moviesData from '../../data/movies.json'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'

function Bookmarked() {
  return (
    <div>
      <Typography variant='h1'>Bookmarked page</Typography>
      {moviesData.map((movie, index) => (
        <ThumbnailCard key={index} movie={movie} />
      ))}
    </div>
  )
}

export default Bookmarked
