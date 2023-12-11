import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box as MuiBox, styled } from '@mui/material'

export const Container = styled(MuiBox)(() => ({
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
}))

export const Card = styled(MuiBox)(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  width: '200px',
  margin: '0 8px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
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
