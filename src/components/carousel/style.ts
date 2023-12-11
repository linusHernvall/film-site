import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box as MuiBox, Typography as MuiTypography, styled } from '@mui/material'
import { theme } from '../../theme'

export const Container = styled(MuiBox)(() => ({
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  gap: '24px',
}))

export const Card = styled(MuiBox)(() => ({
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

export const Content = styled(MuiBox)(({ theme }) => ({
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

export const TypographyContainer = styled(MuiBox)(() => ({
  width: '100%',
  display: 'flex',
  alignItem: 'center',
  gap: '0.4rem',
}))

export const Text = styled(MuiTypography)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.background.default,
}))

export const HeartButton = styled(MuiBox)(() => ({
  cursor: 'pointer',
}))

export const HeartIcon = styled(MuiBox)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.secondary.main,
  cursor: 'pointer',
}))

export const HeartIconRed = styled(MuiBox)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  cursor: 'pointer',
  fontVariationSettings: `'FILL' 1`,
  color: theme.palette.primary.main,
}))

export const CardBox = styled(MuiBox)(() => ({
  position: 'absolute',
  bottom: '16px',
  left: '4px',
}))

export const PrevArrow = styled(NavigateBeforeIcon)(({ theme }) => ({
  fontSize: '80px',
  color: theme.palette.secondary.main,
  background: 'transparent',
  cursor: 'pointer',
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '10',
}))

export const NextArrow = styled(NavigateNextIcon)(({ theme }) => ({
  fontSize: '80px',
  background: 'transparent',
  color: theme.palette.secondary.main,
  cursor: 'pointer',
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '10',
}))
