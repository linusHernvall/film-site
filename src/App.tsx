import movieData from '../data/movies.json'
import { Carousel } from './components'

function App() {
  return (
    <div>
      <Carousel movies={movieData} />
    </div>
  )
}

export default App
