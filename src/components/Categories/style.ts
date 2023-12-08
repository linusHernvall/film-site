import { Box, styled } from '@mui/material'

export const CategoryBox = styled(Box)(({ theme }) => ({
  width: 170,
  height: 170,
  backgroundColor: theme.palette.secondary[800],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.secondary[700],
  },
}))
