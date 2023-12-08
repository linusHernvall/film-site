import { useParams } from 'react-router'
import moviesData from '../../data/movies.json'
import MovieCard from '../components/MovieCard/MovieCard'

function FilmView() {
  const { title } = useParams()
  const selectedMovie = moviesData.find(movie => movie.title.replace(/\s+/g, '-') === title)

  if (!selectedMovie) {
    return <div>Movie not found</div>
  }

  return <MovieCard movie={selectedMovie} />
}

export default FilmView
