import { Box, CardMedia } from '@mui/material'
import {
  ButtonContainer,
  InfoButton,
  InfoContainer,
  PlayButton,
  Title,
  TitleAndButtonContainer,
} from './style'

function Herobanner() {
  return (
    <Box sx={{ marginBottom: '6rem' }}>
      <CardMedia
        component='video'
        autoPlay
        loop
        muted
        sx={{ width: '100%', height: '600px', objectFit: 'cover' }}
        src='https://www.pexels.com/sv-se/download/video/2711111/?fps=24.0&h=720&w=1280'
      ></CardMedia>
      <InfoContainer>
        <TitleAndButtonContainer>
          <Title variant='h1'>Nature's Adventure</Title>
          <ButtonContainer>
            <PlayButton style={{ display: 'flex,', alignItems: 'center' }}>
              <span className='material-symbols-outlined'>play_arrow</span>
              Play
            </PlayButton>
            <InfoButton style={{ display: 'flex,', alignItems: 'center' }}>
              <span className='material-symbols-outlined'>info</span>More info
            </InfoButton>
          </ButtonContainer>
        </TitleAndButtonContainer>
        <div style={{ width: '500px' }}>
          <p style={{ color: 'white' }}>
            Emily, an adventurous biologist, sets out to uncover the secrets of an untouched
            wilderness. As she immerses herself in the diverse landscapes, from towering mountains
            to serene lakeshores, the film becomes a celebration of nature's resilience and the
            intrinsic connection between humanity and the great outdoors.
          </p>
        </div>
      </InfoContainer>
    </Box>
  )
}

export default Herobanner
