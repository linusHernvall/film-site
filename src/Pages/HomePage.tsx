import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { default as movieData, default as moviesData } from '../../data/movies.json'
import Header from '../components/Header/Header'
import MovieCarousel from '../components/moviecarousel/MovieCarousel'
import SearchBar from '../components/searchBar/SearchBar'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
import { Movie } from '../interface/interfaces'
import { theme } from '../theme'

function HomePage() {
  const [searchMovie, setSearchMovie] = useState('')
  const [searchResults, setSearchResults] = useState<Movie[]>([])
  const [isError, setIsError] = useState(false)
  const [noResults, setNoResults] = useState(false)

  const handleSearch = () => {
    if (searchMovie.trim() === '') {
      setIsError(true)
      setNoResults(false)
    } else {
      setIsError(false)
      const filteredMovies = movieData.filter(movie =>
        movie.title.toLowerCase().includes(searchMovie.toLowerCase())
      )
      if (filteredMovies.length > 0) {
        setSearchResults(filteredMovies)
        setNoResults(false)
      } else {
        setNoResults(true)
      }
    }
  }

  const getMessage = () => {
    if (isError) {
      return 'Please enter a search term.'
    } else if (noResults && !isError) {
      return 'No movies found matching your search.'
    } else {
      return ''
    }
  }

  return (
    <div>
      <Header />
      <SearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        onSubmit={handleSearch}
      />

      {/* Single Box for displaying messages or acting as a filler */}
      <Box sx={{ minHeight: '24px', marginBottom: '24px' }}>
        {' '}
        <Typography
          variant='body1'
          color={isError || noResults ? theme.palette.secondary.main : 'transparent'}
        >
          {getMessage()}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {searchResults.map(movie => (
          <ThumbnailCard key={movie.title} movie={movie} />
        ))}
      </Box>
      <MovieCarousel />

      <div>
        {moviesData.map((movie, index) => (
          <ThumbnailCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
