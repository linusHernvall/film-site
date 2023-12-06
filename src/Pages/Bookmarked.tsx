import { Box as MuiBox, Typography } from '@mui/material'

function Bookmarked() {
  return (
    <MuiBox sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Your list</Typography>
    </MuiBox>
  )
}

export default Bookmarked
