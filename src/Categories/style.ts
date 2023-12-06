import { Box, Typography, styled } from '@mui/material'

export const CategoryBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '170px',
  color: 'white',
  height: '170px',
  margin: '0 8px',
  overflow: 'hidden',
  background: 'pink',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    background: 'red',
  },
}))

export const TextTitle = styled(Typography)(() => ({
  color: 'white',

  '&:hover': {
    transform: 'scale(1.1)',
    background: 'red',
  },
}))
