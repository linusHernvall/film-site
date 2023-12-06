import { Box, Grid } from '@mui/material'
import moviesData from '../../data/movies.json' // Import your JSON data

// Define an interface to represent the movie object structure
interface Movie {
  title: string
  year: number
  rating: string
  actors: string[]
  genre: string
  synopsis: string
  thumbnail: string
  isTrending?: boolean
}

const CategoryGallery = () => {
  const allGenres: string[] = moviesData.flatMap((movie: Movie) => movie.genre.split(','))
  const uniqueGenres: string[] = Array.from(new Set(allGenres.map((genre: string) => genre.trim())))

  return (
    <Grid container spacing={1}>
      {uniqueGenres.map((genre: string, index: number) => (
        <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
          <Box
            sx={{
              width: 170,
              height: 170,
              backgroundColor: 'blue', // Set your desired box style
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {genre}
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default CategoryGallery
