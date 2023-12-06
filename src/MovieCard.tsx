import { Box, Typography } from '@mui/material'

function MovieCard() {
  return (
    <Box display='flex' flexDirection='column' marginLeft='20px' marginRight='20px'>
      <img src='/poster.jpg' alt='Movie Poster' />

      {/* Box with movie description */}

      <Typography variant='h1'>Oppenheimer</Typography>
      <Typography variant='h3'>Genre: Drama</Typography>

      <br />
      <Typography variant='body1'>
        A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a
        beautiful widow from a ruthless assassin working for the railroad.
      </Typography>

      {/* Box with movie information */}

      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h3'>Year: </Typography>
        <Typography variant='body1'>2023</Typography>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h3'>Rating:</Typography>
        <Typography variant='body1'> PG-13</Typography>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h3'>Cast:</Typography>
        <Typography variant='body1'>
          Cillian Murphy, Robert Downey Jr, Emily BLunt, Matt Damon
        </Typography>
      </Box>
    </Box>
  )
}

export default MovieCard
