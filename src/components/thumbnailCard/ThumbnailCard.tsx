import { Card, CardMedia, Box as MuiBox, Box as TypographyContainer } from '@mui/material'
import { Movie } from '../../interface/interfaces'
import { Content, HeartIcon, Text } from './style'

interface ThumbnailCardProps {
  movie: Movie
}

function ThumbnailCard({ movie }: ThumbnailCardProps) {
  const { title, year, rating, thumbnail } = movie

  return (
    <MuiBox>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component='img'
          alt={title}
          height='100%'
          image={thumbnail}
        />
        <Content>
          <TypographyContainer
            sx={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              backgroundColor: '#f5f5f1',
              color: 'black',
            }}
          >
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
