import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import BackArrow from './components/BackArrow/BackArrow'
import Header from './components/Header/Header'

function App() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <BackArrow />
      <Outlet />
    </Box>
  )
}

export default App
