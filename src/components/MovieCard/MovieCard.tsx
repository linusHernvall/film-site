import { Box, Grid, Typography } from '@mui/material'

import {
  MovieCardContainer,
  MovieInfoBox,
  MovieInfoItemBox,
  MoviePosterImage,
  VerticalLine,
} from './style'

function MovieCard() {
  return (
    <MovieCardContainer container spacing={2} justifyContent='center'>
      {/* Movie Poster */}
      <Grid item md={4}>
        <MoviePosterImage src='/poster.jpg' alt='Movie Poster' />
      </Grid>

      {/* Movie Description */}
      <Grid item md={8}>
        <MovieInfoBox>
          {/* Box with movie description */}
          <MovieInfoItemBox>
            {/* Vertical line */}
            <VerticalLine />

            <Box>
              <Typography variant='h1'>Oppenheimer</Typography>
              <Typography variant='h3'>Genre: Drama</Typography>
            </Box>
          </MovieInfoItemBox>

          <br />
          <Typography variant='body1'>
            A mysterious stranger with a harmonica joins forces with a notorious desperado to
            protect a beautiful widow from a ruthless assassin working for the railroad.
          </Typography>

          {/* Box with movie information */}
          <MovieInfoItemBox>
            <Typography variant='h3'>Year: </Typography>
            <Typography variant='body1'>2023</Typography>
          </MovieInfoItemBox>
          <MovieInfoItemBox>
            <Typography variant='h3'>Rating:</Typography>
            <Typography variant='body1'> PG-13</Typography>
          </MovieInfoItemBox>
          <MovieInfoItemBox>
            <Typography variant='h3'>Cast:</Typography>
            <Typography variant='body1'>
              Cillian Murphy, Robert Downey Jr, Emily BLunt, Matt Damon
            </Typography>
          </MovieInfoItemBox>

          <br />
          <br />
        </MovieInfoBox>
      </Grid>
    </MovieCardContainer>
  )
}

export default MovieCard
