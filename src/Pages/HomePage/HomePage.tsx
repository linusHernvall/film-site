import { Typography } from '@mui/material'
import { useState } from 'react'
import movieData from '../../../data/movies.json'
import MovieCarousel from '../../components/moviecarousel/MovieCarousel'
import SearchBar from '../../components/searchBar/SearchBar'
import ThumbnailCard from '../../components/thumbnailCard/ThumbnailCard'
import { Movie } from '../../interface/interfaces'
import { theme } from '../../theme'
import { ErrorContainer, SearchContainer, SearchResultGrid } from './style'

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
      <SearchContainer>
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          onSubmit={handleSearch}
        />
      </SearchContainer>
      {/* Single Box for displaying messages or acting as a filler */}
      <ErrorContainer>
        {' '}
        <Typography
          variant='body1'
          color={isError || noResults ? theme.palette.secondary.main : 'transparent'}
        >
          {getMessage()}
        </Typography>
      </ErrorContainer>

      <SearchResultGrid container>
        {searchResults.map(movie => (
          <SearchResultGrid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.title}>
            <ThumbnailCard movie={movie} />
          </SearchResultGrid>
        ))}
      </SearchResultGrid>
      <MovieCarousel />
    </div>
  )
}

export default HomePage
