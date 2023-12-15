import { Box, Grid, Typography } from '@mui/material'
import { useThumbnailContext } from '../../context/ThumbnailContext'
import { Movie } from '../../interface/interfaces'
import { HeartButton } from '../thumbnailCard/style'
import placeholderImage from '/placeholder.png'

import {
  FilledHeart,
  MovieCardContainer,
  MovieInfoBox,
  MovieInfoItemBox,
  MoviePosterImage,
  OutlinedHeart,
  VerticalLine,
} from './style'

interface MovieCardProps {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
  const { title, year, rating, actors, genre, synopsis, thumbnail } = movie
  const { bookmarkedMovies, setBookmarkedMovies } = useThumbnailContext()

  const isBookmarked = bookmarkedMovies.some(bookmarkedMovie => bookmarkedMovie.title === title)

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedMovies(
        bookmarkedMovies.filter(bookmarkedMovie => bookmarkedMovie.title !== title)
      )
    } else {
      setBookmarkedMovies([...bookmarkedMovies, movie])
    }
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // eslint-disable-next-line no-extra-semi
    ;(event.target as HTMLImageElement).src = placeholderImage
  }

  return (
    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MovieCardContainer container spacing={2} justifyContent='center'>
        {/* Movie Poster */}
        <Grid item md={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <MoviePosterImage src={thumbnail} alt='Movie Poster' onError={handleImageError} />
        </Grid>

        {/* Movie Description */}
        <Grid item md={8}>
          <MovieInfoBox>
            {/* Box with movie description */}
            <MovieInfoItemBox>
              {/* Vertical line */}
              <VerticalLine />
              <Box>
                <Box>
                  <Typography variant='h1'>{title}</Typography>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h3'>Genre: {genre}</Typography>
                  <HeartButton onClick={toggleBookmark} style={{ marginLeft: '1rem' }}>
                    {isBookmarked ? <FilledHeart /> : <OutlinedHeart />}
                  </HeartButton>
                </Box>
              </Box>
            </MovieInfoItemBox>

            <br />
            <Typography variant='body1'>{synopsis}</Typography>

            {/* Box with movie information */}
            <MovieInfoItemBox>
              <Typography variant='h4'>Year:&nbsp;</Typography>
              <Typography variant='body1'>{year}</Typography>
            </MovieInfoItemBox>
            <MovieInfoItemBox>
              <Typography variant='h4'>Rating:&nbsp;</Typography>
              <Typography variant='body1'>{rating}</Typography>
            </MovieInfoItemBox>
            <MovieInfoItemBox>
              <Typography variant='h4'>Cast:&nbsp;</Typography>
              <Typography variant='body1'>{actors.join(', ')}</Typography>
            </MovieInfoItemBox>

            <br />
            <br />
          </MovieInfoBox>
        </Grid>
      </MovieCardContainer>
    </Box>
  )
}

export default MovieCard
