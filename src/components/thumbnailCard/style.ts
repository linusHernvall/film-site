import { Box, CardContent, Typography, styled } from '@mui/material'

export const Content = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.secondary.main,
  justifyContent: 'space-between',
}))

export const HeartIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.secondary[900],
}))

export const Text = styled(Typography)(() => ({
  display: 'flex',
  color: 'black',
  fontFamily: 'Gothic A1'
}))
