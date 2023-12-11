import { Card, CardMedia, Box as MuiBox } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useThumbnailContext } from '../../context/BookmarkedContext'
import { Movie } from '../../interface/interfaces'
import { Content, HeartButton, HeartIcon, HeartIconRed, Text, TypographyContainer } from './style'

interface ThumbnailCardProps {
  movie: Movie
}

function ThumbnailCard({ movie }: ThumbnailCardProps) {
  const { bookmarkedMovies, setBookmarkedMovies } = useThumbnailContext()
  const { title, year, rating, thumbnail } = movie
  const [imageError, setImageError] = useState(false)
  const isBookmarked = bookmarkedMovies.some(bookmarkedMovie => bookmarkedMovie.title === title)
  const navigate = useNavigate()

  const imageSource = imageError
    ? 'https://bfl-bred.com/wp-content/themes/finacia/assets/images/no-image/No-Image-Found-400x264.png'
    : thumbnail

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedMovies(
        bookmarkedMovies.filter(bookmarkedMovie => bookmarkedMovie.title !== title)
      )
    } else {
      setBookmarkedMovies([...bookmarkedMovies, movie])
    }
  }

  const handleClick = () => {
    const formattedTitle = title.replace(/\s+/g, '-')
    navigate(`/filmview/${formattedTitle}`)
  }

  return (
    <MuiBox>
      <Card
        sx={{
          maxWidth: 300,
          '& .MuiCardContent-root:last-child': {
            padding: '20px',
          },
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <CardMedia
          component='img'
          alt={title}
          height='440'
          image={imageSource}
          onError={() => setImageError(true)}
          onClick={handleClick}
        />
        <Content>
          <TypographyContainer>
            <Text variant='body1'>{year}</Text>
            <Text variant='body1'>|</Text>
            <Text variant='body1'>{rating}</Text>
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
    </MuiBox>
  )
}

export default ThumbnailCard
