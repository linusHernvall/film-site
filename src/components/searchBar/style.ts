import SearchIcon from '@mui/icons-material/Search'
import { Box, styled } from '@mui/material'

export const InputContainer = styled(Box)(() => ({
  position: 'relative',
  display: 'inline-block',
}))

export const Input = styled('input')(({ theme }) => ({
  padding: '10px 12px',
  width: '450px',
  borderRadius: '5px',
  background: 'transparent',
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  [theme.breakpoints.down('sm')]: {
    width: '275px',
  },
  '&:focus': {
    outline: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
  },
}))

export const Search = styled(SearchIcon)(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  color: theme.palette.secondary.main,
}))
