import { Avatar, Rating } from '@mui/material'
import {
  TestimonialContainer,
  Details,
  Container,
  Test,
} from '../styles/testimonial.styled'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonial } from '../data'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/all'
const Testimonial = () => {
  return (
    <TestimonialContainer id="testimonial">
      <h1>Testimonial</h1>
      <span>My clients are saying</span>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        spaceBetween={40}
        breakpoints={{
          568: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        speed={3000}
        grabCursor={true}
      >
        {testimonial.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <SingleTestimonial {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </TestimonialContainer>
  )
}

const SingleTestimonial = ({ name, image, test }) => {
  return (
    <Container>
      <Details>
        <div className="left">
          <Avatar src={image} alt={name} />
          <div className="client">
            <h4>{name}</h4>
            <span>Client</span>
          </div>
        </div>
        <Rating
          name="read-only"
          value={5}
          readOnly
          size="small"
          sx={{
            color: '#6e5edb',
          }}
        />
      </Details>
      <Test>
        <p>
          <span>
            <ImQuotesLeft color="#6f5edba6" />
          </span>
          {test}

          <span>
            <ImQuotesRight color="#6f5edba6" />
          </span>
        </p>
      </Test>
    </Container>
  )
}
export default Testimonial
