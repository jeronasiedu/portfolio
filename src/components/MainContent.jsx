import React from 'react'
import {
  MainSection,
  IconsContainer,
  IntroContainer,
  ImageContainer,
  Image,
} from '../styles/maincontent.styled'
import { IconButton, Button } from '@mui/material'
import { BsGithub, FiLinkedin, FiTwitter, IoSend } from 'react-icons/all'
import me from '../images/me2.jpg'
import { useTheme } from 'styled-components'
const MainContent = () => {
  const theme = useTheme()
  const color = theme.colors.active
  const contentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 3,
        type: 'spring',
      },
    },
  }
  const iconVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  const IntroVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  const imageVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  return (
    <MainSection
      id="home"
      variants={contentVariant}
      initial="hidden"
      animate="visible"
    >
      <IconsContainer variants={iconVariant}>
        <IconButton
          aria-label="github"
          component="a"
          href="https://github.com/jeronasiedu"
        >
          <BsGithub color={color} />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          component="a"
          href="https://www.linkedin.com/in/norej-udeisa-a49724211/"
        >
          <FiLinkedin color={color} />
        </IconButton>
        <IconButton
          aria-label="twitter"
          component="a"
          href="https://twitter.com/norej_udeisa"
        >
          <FiTwitter color={color} />
        </IconButton>
      </IconsContainer>
      <IntroContainer variants={IntroVariant}>
        <h1>Hi, I am Jeron</h1>
        <h4>I am a full Stack developer</h4>
        <p>
          High level experience in web design and development knowledge,
          producing quality work
        </p>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
          }}
          endIcon={<IoSend />}
          component="a"
          href="#contactme"
        >
          Contact Me
        </Button>
      </IntroContainer>
      <ImageContainer variants={imageVariant}>
        <Image src={me} alt="profile" />
      </ImageContainer>
    </MainSection>
  )
}

export default MainContent
