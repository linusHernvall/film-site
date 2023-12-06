import { Box, Typography, styled } from '@mui/material'

export const CategoryBox = styled(Box)(({ theme }) => ({
  width: 170,
  height: 170,
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export const TextTitle = styled(Typography)(() => ({}))
