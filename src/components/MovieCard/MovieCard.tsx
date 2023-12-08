import { Box, Grid, Typography } from '@mui/material'
import { Movie } from '../../interface/interfaces'
import {
  MovieCardContainer,
  MovieInfoBox,
  MovieInfoItemBox,
  MoviePosterImage,
  VerticalLine,
} from './style'

interface MovieCardProps {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
  const { title, year, rating, actors, genre, synopsis, thumbnail } = movie

  return (
    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MovieCardContainer container spacing={2} justifyContent='center'>
        {/* Movie Poster */}
        <Grid item md={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <MoviePosterImage src={thumbnail} alt='Movie Poster' />
        </Grid>

        {/* Movie Description */}
        <Grid item md={8}>
          <MovieInfoBox>
            {/* Box with movie description */}
            <MovieInfoItemBox>
              {/* Vertical line */}
              <VerticalLine />

              <Box>
                <Typography variant='h1'>{title}</Typography>
                <Typography variant='h3'>Genre: {genre}</Typography>
              </Box>
            </MovieInfoItemBox>

            <br />
            <Typography variant='body1'>{synopsis}</Typography>

            {/* Box with movie information */}
            <MovieInfoItemBox>
              <Typography variant='h4'>Year: </Typography>
              <Typography variant='body1'>{year}</Typography>
            </MovieInfoItemBox>
            <MovieInfoItemBox>
              <Typography variant='h4'>Rating:</Typography>
              <Typography variant='body1'>{rating}</Typography>
            </MovieInfoItemBox>
            <MovieInfoItemBox>
              <Typography variant='h4'>Cast:</Typography>
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