import SearchIcon from '@mui/icons-material/Search'
import { Box as MuiBox, styled } from '@mui/material'

export const InputContainer = styled(MuiBox)(() => ({
  position: 'relative',
  display: 'inline-block',
}))

export const Input = styled('input')(({ theme }) => ({
  padding: '10px 12px',
  width: '275px',
  borderRadius: '5px',
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
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
