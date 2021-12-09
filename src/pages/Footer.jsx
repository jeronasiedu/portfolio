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
          component="a"
          href="https://www.github.com/jeronasiedu"
          target="_blank"
        >
          <BsGithub />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          sx={{
            color: '#fff',
          }}
          component="a"
          href="https://www.linkedin.com/in/norej-udeisa-a49724211/"
          target="_blank"
        >
          <FiLinkedin />
        </IconButton>
        <IconButton
          aria-label="twitter"
          sx={{
            color: '#fff',
          }}
          component="a"
          href="https://twitter.com/norej_udeisa"
          target="_blank"
        >
          <FiTwitter />
        </IconButton>
      </Right>
    </FooterContainer>
  )
}

export default Footer
