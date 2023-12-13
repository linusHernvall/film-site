import { Box as MuiBox, Grid as MuiGrid, styled } from '@mui/material'

export const SearchContainer = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}))

export const ErrorContainer = styled(MuiBox)(() => ({
  minHeight: '24px',
  marginBottom: '24px',
}))

export const SearchResultGrid = styled(MuiGrid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  gap: '24px',
  marginBottom: '24px',
}))
