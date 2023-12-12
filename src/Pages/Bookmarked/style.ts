import { Box, styled } from '@mui/material'

export const ThumbnailBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  //marginTop: '3rem',
  padding: '2rem',
}))

export const ContainerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '100vh',
}))

export const NoBookmarkedBox = styled(Box)(() => ({
  marginTop: '8rem',
  marginBottom: '8rem',
}))
