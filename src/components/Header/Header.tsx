import { Link } from 'react-router-dom'
import { Categories, HeaderBox, HeartIcon, LittleBox, LogoText } from './style'

function Header() {
  return (
    <HeaderBox>
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <LogoText variant='h1'>NETFLAX</LogoText>
      </Link>
      <LittleBox>
        <Link
          to='/categories/'
          style={{
            textDecoration: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <Categories variant='h4'>CATEGORIES</Categories>
        </Link>
        <Link
          to='/bookmarked'
          style={{
            textDecoration: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <HeartIcon role='heartIcon' />
        </Link>
      </LittleBox>
    </HeaderBox>
  )
}

export default Header
