import { Card, CardMedia, Box as MuiBox } from '@mui/material'
import { useState } from 'react'
import { Movie } from '../../interface/interfaces'
import { Content, HeartButton, HeartIcon, Text, TypographyContainer } from './style'

interface ThumbnailCardProps {
  movie: Movie
}

function ThumbnailCard({ movie }: ThumbnailCardProps) {
  const { title, year, rating, thumbnail } = movie
  const [imageError, setImageError] = useState(false)

  const imageSource = imageError
    ? 'https://bfl-bred.com/wp-content/themes/finacia/assets/images/no-image/No-Image-Found-400x264.png'
    : thumbnail

  return (
    <MuiBox>
      <Card
        sx={{
          maxWidth: 330,
          '& .MuiCardContent-root:last-child': {
            padding: '20px',
          },
        }}
      >
        <CardMedia
          component='img'
          alt={title}
          height='500'
          image={imageSource}
          onError={() => setImageError(true)}
        />
        <Content>
          <TypographyContainer>
            <Text variant='body1'>{year}</Text>
            <Text variant='body1'>|</Text>
            <Text variant='body1'>{rating}</Text>
          </TypographyContainer>
          <HeartButton>
            <HeartIcon className='material-symbols-outlined'>favorite</HeartIcon>
          </HeartButton>
        </Content>
      </Card>
    </MuiBox>
  )
}

export default ThumbnailCard
