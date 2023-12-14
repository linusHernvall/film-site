import { Box, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useThumbnailContext } from '../../context/ThumbnailContext'
import { Movie } from '../../interface/interfaces'
import { theme } from '../../theme'
import {
  ArrowContainer,
  Card,
  Container,
  Content,
  HeartButton,
  HeartIcon,
  HeartIconRed,
  MovieContainer,
  NextArrow,
  PrevArrow,
  TypographyContainer,
} from './style'

interface ICarousel {
  movies: Movie[]
}

function Carousel({ movies }: ICarousel) {
  const cardWidth = 200 + 16
  const [current, setCurrent] = useState(0)
  const [showArrows, setShowArrows] = useState(false)
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(
    Math.floor(window.innerWidth / cardWidth)
  )
  const { bookmarkedMovies, setBookmarkedMovies } = useThumbnailContext()
  const boxRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const updateVisibleMoviesCount = () => {
    if (boxRef.current) {
      const boxWidth = boxRef.current.offsetWidth
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

  const handleNavigate = (title: string) => {
    const formattedTitle = title.replace(/\s+/g, '-')
    navigate(`/filmview/${formattedTitle}`)
  }

  const renderMovies = () => {
    const totalMovies = movies.length

    const endIndex = current + visibleMoviesCount

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
        e.currentTarget.src = '../src/assets/placeholder.png'
        e.currentTarget.alt = 'Placeholder'
      }

      return (
        <Card key={movie.title}>
          <img
            style={{
              maxWidth: '100%',
              height: '300px',
              objectFit: 'cover',
            }}
            src={movie.thumbnail}
            alt={movie.title}
            onError={handleImgError}
            onClick={() => handleNavigate(movie.title)}
          />

          <Content>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItem: 'center',
              }}
            >
              <TypographyContainer>
                <Typography color={theme.palette.grey[400]} variant='body1'>
                  {movie.year}
                </Typography>
                <Typography color={theme.palette.grey[400]} variant='body1'>
                  |
                </Typography>
                <Typography color={theme.palette.grey[400]} variant='body1'>
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
            </Box>
            <Typography color={theme.palette.grey[400]} variant='h6'>
              {movie.title}
            </Typography>
          </Content>
        </Card>
      )
    })
  }

  return (
    <Container>
      <MovieContainer ref={boxRef}>{renderMovies()}</MovieContainer>
      <ArrowContainer>
        {showArrows && <PrevArrow role='prevArrow' onClick={handlePrev} />}
        {showArrows && <NextArrow role='nextArrow' onClick={handleNext} />}
      </ArrowContainer>
    </Container>
  )
}
export default Carousel
