import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from 'react'
import { useSessionStorageState } from '../hooks/useSessionStorage'
import { Movie } from '../interface/interfaces'

interface ThumbnailContextProps {
  bookmarkedMovies: Movie[]
  setBookmarkedMovies: Dispatch<SetStateAction<Movie[]>>
}

const ThumbnailContext = createContext<ThumbnailContextProps | undefined>(undefined)

export const ThumbnailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useSessionStorageState<Movie[]>(
    [],
    'bookmarkedMovies'
  )

  const contextValue: ThumbnailContextProps = {
    bookmarkedMovies,
    setBookmarkedMovies,
  }

  return <ThumbnailContext.Provider value={contextValue}>{children}</ThumbnailContext.Provider>
}

export const useThumbnailContext = () => {
  const context = useContext(ThumbnailContext)
  if (!context) {
    throw new Error('useThumbnailContext must be used within a ThumbnailProvider')
  }
  return context
}
