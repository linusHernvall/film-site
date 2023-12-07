import { expect, render, test } from 'vitest'
import MovieCard from '../components/MovieCard/MovieCard'

test('MovieCard renders correctly', () => {
  const movie = {
    title: 'Sample Movie',
    year: '2022',
    rating: 8.5,
    actors: ['Actor 1', 'Actor 2'],
    genre: 'Action',
    synopsis: 'A sample movie synopsis.',
    thumbnail: 'path/to/image.jpg',
  }

  const tree = render.create(<MovieCard movie={movie} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MovieCard renders movie information correctly', () => {
  const movie = {
    title: 'Sample Movie',
    year: '2022',
    rating: 8.5,
    actors: ['Actor 1', 'Actor 2'],
    genre: 'Action',
    synopsis: 'A sample movie synopsis.',
    thumbnail: 'path/to/image.jpg',
  }

  const { getByText } = render(<MovieCard movie={movie} />)

  expect(getByText('Sample Movie')).toBeInTheDocument()
  expect(getByText('Genre: Action')).toBeInTheDocument()
  expect(getByText('Year:')).toBeInTheDocument()
  expect(getByText('2022')).toBeInTheDocument()
})
