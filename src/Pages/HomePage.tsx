import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import movieData from '../../data/movies.json'
import MovieCard from '../components/MovieCard/MovieCard'
import SearchBar from '../components/searchBar/SearchBar'
import { Movie } from '../interface/interfaces'

function HomePage() {
  const [searchWord, setSearchWord] = useState('')
  const [searchResults, setSearchResults] = useState<Movie[]>([])
  const [isError, setIsError] = useState(false)
  const [noResults, setNoResults] = useState(false)

  const handleSearch = () => {
    if (searchWord.trim() === '') {
      setIsError(true)
      setNoResults(false)
    } else {
      setIsError(false)
      const filteredMovies = movieData.filter(movie =>
        movie.title.toLowerCase().includes(searchWord.toLowerCase())
      )
      setSearchResults(filteredMovies)
      setNoResults(filteredMovies.length === 0)
    }
  }

  return (
    <div>
      <Typography variant='h1'>Home Page</Typography>
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} onSubmit={handleSearch} />
      {isError && (
        <Box>
          <Typography>Please enter a search term.</Typography>
        </Box>
      )}

      {noResults && (
        <Box>
          <Typography>No movies found matching your search.</Typography>
        </Box>
      )}

      {!isError &&
        !noResults &&
        searchResults.map(movie => <MovieCard key={movie.title} movie={movie} />)}
    </div>
  )
}

export default HomePage
