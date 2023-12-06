import movieData from '../../data/movies.json'
import Carousel from '../components/carousel/Carousel'

function HomePage() {
  return (
    <div>
      <Carousel movies={movieData} />
    </div>
  )
}

export default HomePage
