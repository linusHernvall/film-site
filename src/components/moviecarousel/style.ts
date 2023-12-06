import { Box as MuiBox, styled } from '@mui/material'

export const Container = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '8px',
}))
