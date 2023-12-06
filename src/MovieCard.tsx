import { Box } from '@mui/material'

function MovieCard() {
  // Define your styles at the bottom of your code
  const styles = {
    movieCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    movieImage: {
      height: '400px',
      width: '300px',
      objectFit: 'cover',
    },
    movieTitle: {
      color: 'white',
      fontFamily: 'Bebas Neue',
    },
    movieGenre: {
      color: 'white',
      fontFamily: 'Bebas Neue',
    },
    movieDescription: {
      margin: '16px 0',
    },
  }

  return (
    <Box>
      <img src='/poster.jpg' alt='Movie Poster' />

      {/* Box with movie description */}
      <Box>
        <h2 style={styles.movieTitle}>Oppenheimer</h2>
        <h3 style={styles.movieGenre}>Genre: Drama</h3>
      </Box>

      <Box style={styles.movieDescription}>
        <p>
          A mysterious stranger with a harmonica joins forces with a notorious desperado to protect
          a beautiful widow from a ruthless assassin working for the railroad.
        </p>
      </Box>

      {/* Box with movie information */}
      <Box>
        <p>Year: 2023</p>
        <p>Rating: PG-13</p>
        <p>Cast: Cillian Murphy, Robert Downey Jr, Emily BLunt, Matt Damon</p>
      </Box>
    </Box>
  )
}

export default MovieCard
