import { Typography } from '@mui/material'
import ThumbnailCard from '../../components/thumbnailCard/ThumbnailCard'
import { ContainerBox, ThumbnailBox } from './style'
import { useThumbnailContext } from '../../context/ThumbnailContext'

function Bookmarked() {
  const { bookmarkedMovies } = useThumbnailContext()

  return (
    <ContainerBox>
      <Typography variant='h1'>Bookmarked movies</Typography>
      <ThumbnailBox>
        {bookmarkedMovies.map((movie, index) => (
          <ThumbnailCard key={index} movie={movie} />
        ))}
      </ThumbnailBox>
    </ContainerBox>
  )
}

export default Bookmarked
