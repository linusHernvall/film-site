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
  const cardWidth = 200 + 16
  console.log(window.innerWidth, 'Inner width')
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(
    Math.floor(window.innerWidth / cardWidth)
  )
  const boxRef = useRef<HTMLDivElement>(null)

  const updateVisibleMoviesCount = () => {
    if (boxRef.current) {
      console.log({ boxRef })
      const boxWidth = boxRef.current.offsetWidth
      console.log({ boxWidth })

      setVisibleMoviesCount(Math.floor(boxWidth / cardWidth))
    }
  }

  useEffect(() => {
    updateVisibleMoviesCount()
    window.addEventListener('resize', updateVisibleMoviesCount)

    return () => window.removeEventListener('resize', updateVisibleMoviesCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    console.log({ current })
    console.log({ endIndex })
    console.log({ visibleMoviesCount })
    console.log({ totalMovies })

    let movieSlice = []

    if (visibleMoviesCount >= totalMovies) {
      movieSlice = movies
    } else {
      if (endIndex > totalMovies) {
        const endSliceCount = endIndex - totalMovies
        movieSlice = movies.slice(current, totalMovies + 1)
        movieSlice = movieSlice.concat(movies.slice(0, endSliceCount))
      } else {
        movieSlice = movies.slice(current, endIndex)
      }
    }

    return movieSlice.map((movie, index) => (
      <Card key={index}>
        <img
          style={{
            // height: '100%',
            // // width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
          src={movie.thumbnail}
          alt={movie.title}
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
        width: '100vw',
        minWidth: '375px',
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
