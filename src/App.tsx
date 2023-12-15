import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import BackArrow from './components/BackArrow/BackArrow'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Header />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '90%', display: 'flex' }}>
          <BackArrow />
        </Box>
      </Box>

      <Outlet />
      <Box sx={{ marginTop: 'auto' }}>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
