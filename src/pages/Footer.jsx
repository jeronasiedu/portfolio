import {
  FooterContainer,
  Left,
  Right,
  Middle,
  Link,
} from '../styles/Footer.styled'
import IconButton from '@mui/material/IconButton'
import { BsGithub, FiLinkedin, FiTwitter } from 'react-icons/all'
const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Link href="#">
          <h2>Jeron</h2>
        </Link>
        <p>Full Stack developer</p>
      </Left>
      <Middle>
        <Link href="#services">Services</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contactme">Contact Me</Link>
      </Middle>
      <Right>
        <IconButton
          aria-label="github"
          sx={{
            color: '#fff',
          }}
        >
          <BsGithub />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          sx={{
            color: '#fff',
          }}
        >
          <FiLinkedin />
        </IconButton>
        <IconButton
          aria-label="github"
          sx={{
            color: '#fff',
          }}
        >
          <FiTwitter />
        </IconButton>
      </Right>
    </FooterContainer>
  )
}

export default Footer
