import { Box, CardMedia } from '@mui/material'
import {
  BtnText,
  ButtonContainer,
  InfoButton,
  InfoContainer,
  InfoText,
  InfoTextContainer,
  PlayButton,
  Title,
  TitleAndButtonContainer,
} from './style'
import { theme } from '../../theme'

function Herobanner() {
  return (
    <Box sx={{ marginBottom: '6rem' }}>
      <CardMedia
        component='video'
        autoPlay
        loop
        muted
        sx={{
          width: '100%',
          height: '600px',
          objectFit: 'cover',
          [theme.breakpoints.down('sm')]: {
            height: '500px',
          },
        }}
        src='https://www.pexels.com/sv-se/download/video/2711111/?fps=24.0&h=720&w=1280'
      ></CardMedia>
      <InfoContainer>
        <TitleAndButtonContainer>
          <Title variant='h1'>Nature's Adventure</Title>
          <ButtonContainer>
            <PlayButton>
              <span
                style={{
                  fontVariationSettings: `'FILL' 1`,
                }}
                className='material-symbols-outlined'
              >
                play_arrow
              </span>
              <BtnText variant='body2'>Play</BtnText>
            </PlayButton>
            <InfoButton>
              <span className='material-symbols-outlined'>info</span>
              <BtnText variant='body2'>More info</BtnText>
            </InfoButton>
          </ButtonContainer>
        </TitleAndButtonContainer>
        <InfoTextContainer>
          <InfoText variant='body1'>
            Emily, an adventurous biologist, sets out to uncover the secrets of an untouched
            wilderness. As she immerses herself in the diverse landscapes, from towering mountains
            to serene lakeshores, the film becomes a celebration of nature's resilience and the
            intrinsic connection between humanity and the great outdoors.
          </InfoText>
        </InfoTextContainer>
      </InfoContainer>
    </Box>
  )
}

export default Herobanner
