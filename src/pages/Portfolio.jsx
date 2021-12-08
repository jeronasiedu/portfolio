import {
  PortfolioContainer,
  SwipeContainer,
  SwipeImage,
  SwipeContent,
} from '../styles/portfolio.styled'
import { portfolio } from '../data'
import { Pagination, EffectCoverflow, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../styles/services.styled'
import { BiArrowToRight } from 'react-icons/all'
const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <h1>Portfolio </h1>
      <span>Most recent work</span>
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay, Parallax]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        grabCursor={true}
      >
        {portfolio.map((item, key) => {
          return (
            <SwiperSlide key={key}>{<SwipeElement {...item} />}</SwiperSlide>
          )
        })}
      </Swiper>
    </PortfolioContainer>
  )
}

const SwipeElement = ({ image, title, desc, href }) => {
  return (
    <SwipeContainer>
      <SwipeImage data-swiper-parallax="-500">
        <img src={image} alt={title} />
      </SwipeImage>
      <SwipeContent>
        <h3 className="title" data-swiper-parallax="-300">
          {title}
        </h3>
        <p data-swiper-parallax="100">{desc}</p>
        <Button as="a" href={href} target="_blank">
          demo
          <BiArrowToRight className="arrow" size={20} />
        </Button>
      </SwipeContent>
    </SwipeContainer>
  )
}
export default Portfolio
