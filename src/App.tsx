import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import BackArrow from './components/BackArrow/BackArrow'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Box>
      <Header />
      <BackArrow />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default App
