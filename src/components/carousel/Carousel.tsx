import { Box as MuiBox } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Movie } from '../../interface'
import placeholderImg from './images/error.png'
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
    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.src = placeholderImg
    }

    const totalMovies = movies.length
    const endIndex = current + visibleMoviesCount
    let movieSlice = []

    if (endIndex > totalMovies) {
      const endSliceCount = endIndex - totalMovies
      movieSlice = movies.slice(current, totalMovies)
      movieSlice = movieSlice.concat(movies.slice(0, endSliceCount))
    } else {
      movieSlice = movies.slice(current, endIndex)
    }

    return movieSlice.map((movie, index) => (
      <Card key={index}>
        <img
          style={{
            height: '100%',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          src={movie.thumbnail}
          alt={`Image ${index}`}
          onError={handleImgError}
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
