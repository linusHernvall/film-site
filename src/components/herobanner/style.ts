import { Box, Button, Typography, styled } from '@mui/material'

export const InfoContainer = styled(Box)(() => ({
  position: 'absolute',
  left: '100px',
  top: '350px',
}))

export const TitleAndButtonContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
}))

export const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
}))

export const Title = styled(Typography)(() => ({}))

export const PlayButton = styled(Button)(() => ({
  backgroundColor: 'white',
  color: 'black'
}))

export const InfoButton = styled(Button)(() => ({
  backgroundColor: 'lightgrey',
  color: 'black'
}))
