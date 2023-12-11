import React from 'react'
import { Input, InputContainer, Search } from './style'

interface ISearchBar {
  searchMovie: string
  setSearchMovie: (searchMovie: string) => void
  onSubmit: (searchMovie: string) => void
}

function SearchBar({
  searchMovie: searchMovie,
  setSearchMovie: setSearchMovie,
  onSubmit,
}: ISearchBar) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(searchMovie)
  }

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault()
    onSubmit(searchMovie)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type='text'
          value={searchMovie}
          onChange={e => setSearchMovie(e.target.value)}
          placeholder='Search movies...'
        />
        <Search type='submit' onClick={handleClick} />
      </InputContainer>
    </form>
  )
}

export default SearchBar
