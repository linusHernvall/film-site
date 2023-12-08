import { Typography } from '@mui/material'
import { useState } from 'react'
import MovieCarousel from '../components/movieCarousel/MovieCarousel'
import SearchBar from '../components/searchBar/SearchBar'

function HomePage() {
  const [searchWord, setSearchWord] = useState('')

  const handleSearch = () => {}
  return (
    <div>
      <Typography variant='h1'>Home Page</Typography>
      <MovieCarousel />
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} onSubmit={handleSearch} />
    </div>
  )
}

export default HomePage
