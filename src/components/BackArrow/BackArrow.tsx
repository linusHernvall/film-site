import { useLocation } from 'react-router'
import { ArrowIcon, BackArrowContainer } from './style'

function BackArrow() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleBack = () => {
    history.back()
  }

  if (isHomePage) {
    return null
  }

  if (isHomePage) {
    return null
  }
  return (
    <BackArrowContainer onClick={handleBack}>
      <ArrowIcon />
    </BackArrowContainer>
  )
}

export default BackArrow
