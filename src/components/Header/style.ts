import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { Box, Typography, styled } from '@mui/material'

export const HeaderBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const LittleBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

export const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '3.5rem',
}))

export const Categories = styled(Typography)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary[800],
  },
}))

export const HeartIcon = styled(FavoriteRoundedIcon)(({ theme }) => ({
  color: theme.palette.secondary[100],
  fontSize: '2rem',
  marginLeft: '1rem',
  '&:hover': {
    color: theme.palette.primary[800],
  },
}))
