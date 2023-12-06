import { Box, Typography } from '@mui/material'

function MovieCard() {
  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', marginLeft: '40px', marginRight: '40px' }}
    >
      <img src='/poster.jpg' alt='Movie Poster' />
      <br />
      <br />
      {/* Box with movie description */}

      <Box style={{ display: 'flex', alignItems: 'center' }}>
        {/* Vertical line */}
        <Box
          style={{
            height: '70px',
            width: '3px',
            backgroundColor: '#E50914',
            marginRight: '10px',
            marginLeft: '-10px',
          }}
        />

        <Box>
          <Typography variant='h1'>Oppenheimer</Typography>
          <Typography variant='h3'>Genre: Drama</Typography>
        </Box>
      </Box>

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
