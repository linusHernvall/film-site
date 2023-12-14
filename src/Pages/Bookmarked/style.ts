import { Box, styled } from '@mui/material'

export const ThumbnailBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
}))

export const ContainerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))

export const NoBookmarkedBox = styled(Box)(() => ({
  marginTop: '8rem',
  marginBottom: '8rem',
}))
