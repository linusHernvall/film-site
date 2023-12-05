import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box as MuiBox, styled } from '@mui/material'

export const Card = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '8px',
  width: '200px',
  margin: '0 8px',
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
}))
