import { Typography } from '@mui/material'
import ThumbnailCard from '../../components/thumbnailCard/ThumbnailCard'
import { ContainerBox, ThumbnailBox } from './style'
import { useThumbnailContext } from '../../context/ThumbnailContext'

function Bookmarked() {
  const { bookmarkedMovies } = useThumbnailContext()

  return (
    <ContainerBox>
    <Typography variant='h1'>Your List</Typography>
    {bookmarkedMovies.length > 0 ? (
      <ThumbnailBox>
        {bookmarkedMovies.map((movie, index) => (
          <ThumbnailCard key={index} movie={movie} />
        ))}
      </ThumbnailBox>
    ) : (
      <Typography variant='body1'>You haven’t added any titles to your list yet.</Typography>
    )}
  </ContainerBox>
  )
}

export default Bookmarked
