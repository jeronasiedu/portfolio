import {
  AdvertContainer,
  Content,
  ImageContainer,
} from '../styles/advert.styled'
import { Button } from '@mui/material'
import { IoSend } from 'react-icons/all'
import me from '../images/jeron.jpg'
const Advert = () => {
  return (
    <AdvertContainer>
      <Content>
        <h3>You have a new project</h3>
        <p>Contact Me and get a 30% discount on your new project</p>
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
      </Content>
      <ImageContainer>
        <img src={me} alt="profile" />
      </ImageContainer>
    </AdvertContainer>
  )
}

export default Advert
