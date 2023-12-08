import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useLocation } from 'react-router'
import { BackArrowContainer } from './style'

function BackArrow() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  if (isHomePage) {
    return null
  }
  return (
    <BackArrowContainer>
      <ArrowBackIcon style={{ color: '#fefefe' }} />
    </BackArrowContainer>
  )
}

export default BackArrow
