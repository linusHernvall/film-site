import React from 'react'
import { Input, InputContainer, Search } from './style'

interface ISearchBar {
  searchWord: string
  setSearchWord: (searchWord: string) => void
  onSubmit: (searchWord: string) => void
}

function SearchBar({ searchWord, setSearchWord, onSubmit }: ISearchBar) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(searchWord)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type='text'
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          placeholder='Search movies...'
        />
        <Search type='submit' />
      </InputContainer>
    </form>
  )
}

export default SearchBar
