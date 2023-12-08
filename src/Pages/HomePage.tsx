import { useState } from 'react'
import SearchBar from '../components/searchBar/SearchBar'

function HomePage() {
  const [searchWord, setSearchWord] = useState('')

  const handleSearch = () => {}
  return (
    <div>
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} onSubmit={handleSearch} />
    </div>
  )
}

export default HomePage
