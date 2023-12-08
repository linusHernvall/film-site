import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import movieData from '../../data/movies.json'
import SearchBar from '../components/searchBar/SearchBar'
import ThumbnailCard from '../components/thumbnailCard/ThumbnailCard'
import { Movie } from '../interface/interfaces'
import { theme } from '../theme'

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
      <Typography variant='h1'>Home Page</Typography>
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} onSubmit={handleSearch} />

      {/* Single Box for displaying messages or acting as a filler */}
      <Box sx={{ minHeight: '24px' }}>
        {' '}
        <Typography
          variant='body1'
          color={isError || noResults ? theme.palette.secondary.main : 'transparent'}
        >
          {getMessage()}
        </Typography>
      </Box>

      {searchResults.map(movie => (
        <ThumbnailCard key={movie.title} movie={movie} />
      ))}
    </div>
  )
}

export default HomePage
