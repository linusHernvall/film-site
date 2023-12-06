import { Box, Typography } from '@mui/material'

function MovieCard() {
  return (
    <Box>
      <img src='/poster.jpg' alt='Movie Poster' />

      {/* Box with movie description */}
      <Box>
        <Typography variant='h1'>Oppenheimer</Typography>
        <Typography variant='h3'>Genre: Drama</Typography>
      </Box>

      <Box>
        <Typography variant='body1'>
          A mysterious stranger with a harmonica joins forces with a notorious desperado to protect
          a beautiful widow from a ruthless assassin working for the railroad.
        </Typography>
      </Box>

      {/* Box with movie information */}
      <Box>
        <Typography variant='body1'>Year: 2023</Typography>
        <Typography variant='body1'>Rating: PG-13</Typography>
        <Typography variant='body1'>
          Cast: Cillian Murphy, Robert Downey Jr, Emily BLunt, Matt Damon
        </Typography>
      </Box>
    </Box>
  )
}

export default MovieCard
