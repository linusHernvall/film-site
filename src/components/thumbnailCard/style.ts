import { Box, CardContent, Typography, styled } from '@mui/material'

export const Content = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',  // Updated to column layout
  backgroundColor: theme.palette.secondary.main,
  alignItems: 'center',
}))

export const HeartButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.secondary[900],
  marginRight: "10px"
}))

export const TypographyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.4rem',
  marginRight: "10px",
  backgroundColor: theme.palette.secondary.main,
  marginTop: '0.4rem', 
}))

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
}))

export const HeartIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.secondary.main,
  cursor: 'pointer',
}))

export const HeartIconRed = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  cursor: 'pointer',
  fontVariationSettings: `'FILL' 1`,
  color: theme.palette.primary.main,
}))
