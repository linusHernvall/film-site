import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from "vitest";
import MovieCard from './MovieCard';

test('MovieCard renders correctly', () => {
  const movie = {
    title: 'Sample Movie',
    year: '2022',
    rating: 8.5,
    actors: ['Actor 1', 'Actor 2'],
    genre: 'Action',
    synopsis: 'A sample movie synopsis.',
    thumbnail: 'path/to/image.jpg',
  };

  const tree = renderer.create(<MovieCard movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});
