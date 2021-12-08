import styled from 'styled-components'
import { hueRotate } from './maincontent.styled'
export const AdvertContainer = styled.section`
  padding: 1rem;
  width: clamp(15rem, 90%, 55rem);
  margin-inline: auto;
  position: relative;
  display: flex;
  margin-block: 1rem;
  background: ${({ theme }) => theme.background.primary};
  gap: 1rem;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ImageContainer = styled.div`
  width: 16rem;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  animation: ${hueRotate} 5s cubic-bezier(0.6, -0.28, 0.735, 0.045) infinite
    alternate-reverse;
  @media (max-width: 670px) {
    width: clamp(5rem, 45%, 200px);
    aspect-ratio: 1;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: auto;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    color: ${({ theme }) => theme.colors.text_w_p};
    letter-spacing: 0.5px;
    font-weight: ${({ theme }) => theme.font.w_normal};
  }
  p {
    color: ${({ theme }) => theme.colors.text_w_s};
    font-weight: ${({ theme }) => theme.font.w_light};
  }
`
