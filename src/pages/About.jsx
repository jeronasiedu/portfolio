import React from 'react'
import {
  AboutContainer,
  Header,
  MainContent,
  ImageContainer,
  Image,
  Content,
  Experiences,
  Exp,
} from '../styles/about.styled'
import me from '../images/me3.jpg'
import { Button } from '@mui/material'
import { BiDownload } from 'react-icons/all'
const About = () => {
  return (
    <AboutContainer id="about">
      <Header>
        <h1>About me</h1>
        <p>My introduction</p>
      </Header>
      <MainContent>
        <ImageContainer>
          <Image src={me} alt="My profile" />
        </ImageContainer>
        <Content>
          <p>
            Web developer with extensive knowledge and years of experience,
            working in web technologies and UI/UX design, delivering quality
            work
          </p>
          <Experiences>
            <Exp>
              <h3>02+</h3>
              <span>
                Years of <br /> experience
              </span>
            </Exp>
            <Exp>
              <h3>15+</h3>
              <span>
                Completed <br /> projects
              </span>
            </Exp>
            <Exp>
              <h3>01+</h3>
              <span>
                Companies <br /> worked
              </span>
            </Exp>
          </Experiences>
          <Button
            variant="contained"
            color="primary"
            sx={{
              alignSelf: 'center',
            }}
            endIcon={<BiDownload />}
          >
            Download CV
          </Button>
        </Content>
      </MainContent>
    </AboutContainer>
  )
}

export default About
