import {
  ContactContainer,
  Item,
  Content,
  ContactForm,
  Me,
  Icon,
  Details,
  TextArea,
  Form,
  Input,
} from '../styles/contact.styled'
import { BiPhone, MdEmail, GoLocation, MdSend } from 'react-icons/all'
import Button from '@mui/material/Button'
const info = [
  {
    text: 'Call Me',
    content: '0544751048',
    icon: <BiPhone size={40} color="#6e5edb" />,
  },
  {
    text: 'Email',
    content: 'norejudeisa@gmail.com',
    icon: <MdEmail size={40} color="#6e5edb" />,
  },
  {
    text: 'Location',
    content: 'Ghana - Eastern, Nsawam',
    icon: <GoLocation size={40} color="#6e5edb" />,
  },
]
const Contact = () => {
  return (
    <ContactContainer id="contactme">
      <h1>Contact Me</h1>
      <span>Get in touch</span>
      <Content>
        <Me>
          {info.map((item, key) => {
            return (
              <Item key={key}>
                <Icon>{item.icon}</Icon>
                <Details>
                  <h3>{item.text}</h3>
                  <span>{item.content}</span>
                </Details>
              </Item>
            )
          })}
        </Me>
        <ContactForm>
          <Form>
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Project" required />
            <TextArea placeholder="Message" />
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                width: '100%',
              }}
              endIcon={<MdSend />}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </ContactForm>
      </Content>
    </ContactContainer>
  )
}

export default Contact
