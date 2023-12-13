import { Box, Button, Typography, styled } from '@mui/material'

export const InfoContainer = styled(Box)(({theme}) => ({
  position: 'absolute',
  left: '100px',
  top: '380px',
  width: '500px',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    left: '20px',
    top: '300px'
  },
}))

export const TitleAndButtonContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0rem',
    marginBottom: '0.7rem'
  },
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
  color: 'black',
  width: '110px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  gap: '0.1rem',
}))

export const InfoButton = styled(Button)(() => ({
  backgroundColor: 'lightgrey',
  color: 'black',
  width: '110px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  gap: '0.2rem',
  
}))

export const InfoTextContainer = styled(Box)(() => ({
  width: '100%',
}))

export const InfoText = styled(Typography)(({theme}) => ({
  color: 'white',
  [theme.breakpoints.down('sm')]: {
   fontSize: '12px'
  },
}))

export const BtnText = styled(Typography)(() => ({
  color: 'black',
  fontSize: '14px',
  paddingTop: '0.1rem'
}))
