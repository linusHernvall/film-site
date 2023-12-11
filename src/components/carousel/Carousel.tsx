import { Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useThumbnailContext } from '../../context/BookmarkedContext'
import { Movie } from '../../interface/interfaces'
import { theme } from '../../theme'
import placeholderImg from './images/error.png'
import {
  Card,
  Container,
  Content,
  HeartButton,
  HeartIcon,
  HeartIconRed,
  NextArrow,
  PrevArrow,
  TypographyContainer,
} from './style'

interface ICarousel {
  movies: Movie[]
}

function Carousel({ movies }: ICarousel) {
  // console.log(window.innerWidth, 'Inner width')

  const cardWidth = 200 + 16

  const [current, setCurrent] = useState(0)
  const [showArrows, setShowArrows] = useState(false)
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(
    Math.floor(window.innerWidth / cardWidth)
  )

  const { bookmarkedMovies, setBookmarkedMovies } = useThumbnailContext()

  const boxRef = useRef<HTMLDivElement>(null)

  const updateVisibleMoviesCount = () => {
    if (boxRef.current) {
      // console.log({ boxRef })
      const boxWidth = boxRef.current.offsetWidth
      // console.log({ boxWidth })

      const newVisibleMoviesCount = Math.floor(boxWidth / cardWidth)
      setVisibleMoviesCount(Math.floor(boxWidth / cardWidth))
      setShowArrows(movies.length > newVisibleMoviesCount)
    }
  }

  useEffect(() => {
    updateVisibleMoviesCount()
    window.addEventListener('resize', updateVisibleMoviesCount)

    return () => window.removeEventListener('resize', updateVisibleMoviesCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies.length])

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % movies.length)
  }

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + movies.length) % movies.length)
  }

  const renderMovies = () => {
    const totalMovies = movies.length

    const endIndex = current + visibleMoviesCount
    // console.log({ current })
    // console.log({ endIndex })
    // console.log({ visibleMoviesCount })
    // console.log({ totalMovies })

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

    return movieSlice.map(movie => {
      const isBookmarked = bookmarkedMovies.some(
        bookmarkedMovie => bookmarkedMovie.title === movie.title
      )

      const toggleBookmark = () => {
        if (isBookmarked) {
          setBookmarkedMovies(
            bookmarkedMovies.filter(bookmarkedMovie => bookmarkedMovie.title !== movie.title)
          )
        } else {
          setBookmarkedMovies([...bookmarkedMovies, movie])
        }
      }

      const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = placeholderImg
      }

      return (
        <Card key={movie.title}>
          <img
            style={{
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
            src={movie.thumbnail}
            alt={movie.title}
            onError={handleImgError}
          />

          <Content>
            <TypographyContainer>
              <Typography color={theme.palette.black[400]} variant='body1'>
                {movie.year}
              </Typography>
              <Typography color={theme.palette.black[400]} variant='body1'>
                |
              </Typography>
              <Typography color={theme.palette.black[400]} variant='body1'>
                {movie.rating}
              </Typography>
            </TypographyContainer>
            <HeartButton onClick={toggleBookmark}>
              {isBookmarked ? (
                <HeartIconRed className='material-symbols-outlined'>favorite</HeartIconRed>
              ) : (
                <HeartIcon className='material-symbols-outlined'>favorite</HeartIcon>
              )}
            </HeartButton>
          </Content>
        </Card>
      )
    })
  }

  return (
    <Container ref={boxRef}>
      {showArrows && <PrevArrow role='prevArrow' onClick={handlePrev} />}
      {renderMovies()}
      {showArrows && <NextArrow role='nextArrow' onClick={handleNext} />}
    </Container>
  )
}
export default Carousel
