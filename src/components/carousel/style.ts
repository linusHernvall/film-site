import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, styled } from '@mui/material'
import { theme } from '../../theme'

export const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column', 
  width: '100%',
}))

export const MovieContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  gap: '24px',
}))

export const ArrowContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'canter',
}))

export const Card = styled(Box)(() => ({
  position: 'relative',
  width: '200px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-out',
  cursor: 'pointer',
  margin: '12px 0px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}))

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  backgroundColor: theme.palette.secondary.main,
  padding: '16px',
  alignItems: 'start',
  gap: '10px',
  borderRadius: '0 0 10px 10px',
  height: '100px',
}))

export const TypographyContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItem: 'center',
  gap: '0.4rem',
}))

export const HeartButton = styled(Box)(() => ({
  cursor: 'pointer',
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

export const PrevArrow = styled(NavigateBeforeIcon)(({ theme }) => ({
  fontSize: '80px',
  color: theme.palette.secondary.main,
  background: 'transparent',
  cursor: 'pointer',
}))

export const NextArrow = styled(NavigateNextIcon)(({ theme }) => ({
  fontSize: '80px',
  background: 'transparent',
  color: theme.palette.secondary.main,
  cursor: 'pointer',
}))
