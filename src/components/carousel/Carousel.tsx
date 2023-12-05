import { Box as MuiBox } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Movie } from '../../interface'
import { Card, NextArrow, PrevArrow } from './style'

interface ICarousel {
  movies: Movie[]
}

export const Carousel = ({ movies }: ICarousel) => {
  const [current, setCurrent] = useState(0)
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)

  const updateVisibleMoviesCount = () => {
    if (boxRef.current) {
      const boxWidth = boxRef.current.offsetWidth
      const cardWidth = 200
      setVisibleMoviesCount(Math.floor(boxWidth / cardWidth))
    }
  }

  useEffect(() => {
    updateVisibleMoviesCount()
    window.addEventListener('resize', updateVisibleMoviesCount)

    return () => window.removeEventListener('resize', updateVisibleMoviesCount)
  }, [])

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % movies.length)
  }

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + movies.length) % movies.length)
  }

  const renderMovies = () => {
    const start = current
    const end = start + visibleMoviesCount
    return movies.slice(start, end).map((movie, index) => (
      <Card key={index}>
        <img
          style={{ objectFit: 'cover', borderRadius: '8px', width: '100%' }}
          src={movie.thumbnail}
          alt={`Image ${index}`}
        />
      </Card>
    ))
  }

  return (
    <MuiBox
      ref={boxRef}
      sx={{
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        border: '1px solid coral',
        position: 'relative',
      }}
    >
      <PrevArrow onClick={handlePrev} />
      {renderMovies()}
      <NextArrow onClick={handleNext} />
    </MuiBox>
  )
}
