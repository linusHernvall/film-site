import moviesData from '../../data/movies.json'
import MovieCard from '../components/MovieCard/MovieCard'

function FilmView() {
  const selectedMovie = moviesData[0]

  return <MovieCard movie={selectedMovie} />
}

export default FilmView
