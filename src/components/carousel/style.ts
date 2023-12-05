import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box as MuiBox, styled } from '@mui/material'

export const Card = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '8px',
  width: '250px',

  // [theme.breakpoints.down('sm')]: {

  // },
}))

export const PrevArrow = styled(NavigateBeforeIcon)(({ theme }) => ({
  fontSize: '80px',
  border: '1px solid white',
  color: theme.palette.secondary.main,
  cursor: 'pointer',
  textDecoration: 'none',
}))
export const NextArrow = styled(NavigateNextIcon)(({ theme }) => ({
  fontSize: '80px',
  border: '1px solid white',
  color: theme.palette.secondary.main,
  cursor: 'pointer',
}))
