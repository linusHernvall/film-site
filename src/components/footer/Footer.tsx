import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box } from '@mui/material'
import { theme } from '../../theme'
import { DividingLine, FooterBox, FooterContainer, Footertext } from './style'

function Footer() {
  return (
    <FooterContainer>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <DividingLine />
      </Box>

      <FooterBox>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              gap: '1rem',
            },
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Footertext>Mediecenter</Footertext>
            <Footertext>Sekretess</Footertext>
            <Footertext>Kontakta oss</Footertext>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Footertext>Presentkort</Footertext>
            <Footertext>Användarvillkor</Footertext>
            <Footertext>Företagsinformation</Footertext>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Footertext>Valiga frågor</Footertext>
            <Footertext>Lös in presentkort</Footertext>
            <Footertext>Hastighetstest</Footertext>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
            }}
          >
            <Footertext>Hjälpcenter</Footertext>
            <Footertext>Jobba hos oss</Footertext>
            <Footertext>Cookie-inställningar</Footertext>
          </Box>
        </Box>
      </FooterBox>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          color: 'white',
          gap: '2rem',
          paddingTop: '1.5rem',
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start', // Optional: align items to flex-start for mobile
          },
        }}
      >
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </Box>
    </FooterContainer>
  )
}

export default Footer
