import {
  Card,
  CardMedia,
  Box as MuiBox,
  Box as TypographyContainer,
} from '@mui/material'
import { Content, HeartIcon, Text } from './style'

function ThumbnailCard() {
  return (
    <MuiBox>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component='img'
          alt='thumbnail'
          height='100%'
          image='https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg'
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
            <Text sx={{ color: 'black' }}>R</Text>
            <Text>1968</Text>
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
