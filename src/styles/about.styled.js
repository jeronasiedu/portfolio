import styled from 'styled-components'
export const AboutContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  max-width: 55rem;
  margin-inline: auto;
`
export const Header = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  h1 {
    color: ${({ theme }) => theme.colors.text_p};
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
  p {
    color: ${({ theme }) => theme.colors.text_s};
  }
`
export const MainContent = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  p {
    color: ${({ theme }) => theme.colors.text_s};
  }
  @media (max-width: 620px) {
    flex-direction: column;
  }
`
export const ImageContainer = styled.div`
  width: 24rem;
  aspect-ratio: 1;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 3px 2px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 670px) {
    width: clamp(16rem, 50vw, 300px);
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  p {
    text-align: center;
    max-width: 80vw;
  }
`
export const Experiences = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Exp = styled.div`
  text-align: center;
  h3 {
    color: ${({ theme }) => theme.colors.text_p};
  }
  span {
    color: ${({ theme }) => theme.colors.text_s};
    font-size: ${({ theme }) => theme.font.size_s};
  }
`
