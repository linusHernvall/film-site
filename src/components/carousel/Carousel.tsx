import { Box as MuiBox } from '@mui/material'
import { useState } from 'react'
import { Movie } from '../../interface'
import { Card, NextArrow, PrevArrow } from './style'

interface ICarousel {
  movies: Movie[]
}

export const Carousel = ({ movies }: ICarousel) => {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % movies.length)
  }

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + movies.length) % movies.length)
  }

  return (
    <MuiBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        border: '1px solid coral',
      }}
    >
      <PrevArrow onClick={handlePrev} />
      <Card>
        <img
          style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
          src={movies[current].thumbnail}
          alt={`Image ${current}`}
        />
      </Card>
      <NextArrow onClick={handleNext} />
    </MuiBox>
  )
}
