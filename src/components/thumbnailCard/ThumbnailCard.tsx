import { Card, CardMedia, Box as MuiBox } from '@mui/material'
import { useState } from 'react'
import { Movie } from '../../interface/interfaces'
import { Content, HeartIcon, Text, TypographyContainer } from './style'

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
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component='img'
          alt={title}
          height='350'
          image={imageSource}
          onError={() => setImageError(true)}
        />
        <Content>
          <TypographyContainer>
            <Text sx={{ color: 'black' }}>{rating}</Text>
            <Text>{year}</Text>
          </TypographyContainer>
          <HeartIcon>
            <span
              className='material-symbols-outlined'
              style={{ color: 'black', backgroundColor: '#f5f5f1' }}
            >
              favorite
            </span>
          </HeartIcon>
        </Content>
      </Card>
    </MuiBox>
  )
}

export default ThumbnailCard
