import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

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
      <Outlet />
      <Footer />
    </Box>
  )
}

export default App
