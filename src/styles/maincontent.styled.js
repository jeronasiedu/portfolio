import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const MainSection = styled(motion.section)`
  display: flex;
  justify-content: space-around;
  max-width: 55rem;
  margin-inline: auto;
  align-items: center;
  padding: 0.5rem;
  margin-block: 1rem;
  margin-top: 3rem;
  @media (max-width: 620px) {
    flex-wrap: wrap;
  }
`
export const hueRotate = keyframes`
from{
  filter: hue-rotate(0deg),
}
to{
  filter: hue-rotate(360deg)
}
`
export const IconsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 620px) {
    order: -1;
  }
`
export const IntroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.text_p};
    font-weight: 600;
    font-size: 2.2rem;
  }
  h4,
  p {
    color: ${({ theme }) => theme.colors.text_s};
    font-weight: ${({ theme }) => theme.font.w_light};
  }
  p {
    max-width: 345px;
  }
`
export const ImageContainer = styled(motion.div)`
  width: clamp(60px, 50%, 240px);
  aspect-ratio: 1;
  animation: ${hueRotate} 5s ease infinite alternate-reverse;
  border-radius: 33% 67% 77% 23% / 37% 39% 61% 63%;
  background: ${({ theme }) => theme.background.primary};
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 620px) {
    order: -1;
  }
`
export const Image = styled.img`
  mix-blend-mode: luminosity;
  width: 100%;
  height: auto;
  object-fit: cover;
`
