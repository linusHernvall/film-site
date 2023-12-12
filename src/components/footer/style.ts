import { Box, Container, Divider, Typography, styled } from '@mui/material'

export const FooterContainer = styled(Container)(() => ({
  padding: '20px',
  position: 'relative',
  bottom: '0',
  width: '100%',
  marginTop: '3rem',
}))

export const FooterBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
}))

export const Footertext = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary[800],
}))

export const DividingLine = styled(Divider)(({ theme }) => ({
  background: theme.palette.secondary[800],
  marginBottom: '1rem',
  width: '100%',
}))
