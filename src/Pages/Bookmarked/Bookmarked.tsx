import { Typography } from '@mui/material'
import moviesData from '../../../data/movies.json'
import ThumbnailCard from '../../components/thumbnailCard/ThumbnailCard'
import { ContainerBox, ThumbnailBox } from './style'

function Bookmarked() {
  return (
    <ContainerBox>
      <Typography variant='h1'>Bookmarked movies</Typography>
      <ThumbnailBox>
        {moviesData.map((movie, index) => (
          <ThumbnailCard key={index} movie={movie} />
        ))}
      </ThumbnailBox>
    </ContainerBox>
  )
}

export default Bookmarked
