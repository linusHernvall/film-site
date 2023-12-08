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
    console.log({ Search })
  }

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault()
    onSubmit(searchWord)
    console.log({ Search })
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
        <Search type='submit' onClick={handleClick} />
      </InputContainer>
    </form>
  )
}

export default SearchBar
