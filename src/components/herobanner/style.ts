import { Box, Button, Typography, styled } from '@mui/material'

export const InfoContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '250px',
  left: '20px',
  top: '300px',
  [theme.breakpoints.up('sm')]: {
    left: '100px',
    top: '380px',
    width: '500px',
  },
  [theme.breakpoints.up('lg')]: {
    top: '450px',
    width: '560px',
  },
}))

export const TitleAndButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '0.7rem',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 0,
    gap: '1rem',
  },
}))

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
  },
}))

export const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
}))

export const PlayButton = styled(Button)(({theme}) => ({
  backgroundColor: 'white',
  color: 'black',
  width: '110px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  gap: '0.1rem',
  '&:hover': {
    backgroundColor: 'white',
  },
  [theme.breakpoints.up('lg')]: {
    width: '130px',
  },
}))

export const InfoButton = styled(Button)(({theme}) => ({
  backgroundColor: 'rgba(217, 217, 217, 0.7)',
  color: 'black',
  width: '110px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  gap: '0.2rem',
  '&:hover': {
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
  },
  [theme.breakpoints.up('lg')]: {
    width: '130px',
  },
}))

export const InfoTextContainer = styled(Box)(() => ({
  width: '100%',
}))

export const InfoText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '12px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}))

export const BtnTextPlay = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '14px',
  paddingTop: '0.1rem',
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}))

export const BtnTextInfo = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '14px',
  paddingTop: '0.1rem',
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}))
