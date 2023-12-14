import { Box, Grid as MuiGrid, styled } from '@mui/material'

export const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

export const ErrorContainer = styled(Box)(() => ({
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
