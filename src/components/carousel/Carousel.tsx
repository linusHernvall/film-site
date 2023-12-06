import { Box as MuiBox, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Movie } from '../../interface/interfaces'
import placeholderImg from './images/error.png'
import { Card, CardBox, NextArrow, PrevArrow } from './style'

interface ICarousel {
  movies: Movie[]
}

function Carousel({ movies }: ICarousel) {
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
        <CardBox
          sx={{
            padding: '2px 8px',
            borderRadius: '8px',
            opacity: '0.5',
          }}
        >
          <Typography variant='body2'>{movie.year}</Typography>
          <Typography variant='body2'>{movie.rating}</Typography>
        </CardBox>
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
        position: 'relative',
      }}
    >
      <PrevArrow onClick={handlePrev} />
      {renderMovies()}
      <NextArrow onClick={handleNext} />
    </MuiBox>
  )
}
export default Carousel
