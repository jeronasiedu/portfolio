import styled from 'styled-components'
export const PortfolioContainer = styled.section`
  padding: 1rem;
  max-width: 55rem;
  margin-inline: auto;
  position: relative;
  h1,
  span {
    text-align: center;
  }
  h1 + span {
    display: block;
    margin-bottom: 1rem;
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-inline: auto;
    padding: 0.5rem;
  }
  .swiper-slide {
    padding: 0.5rem;
    border: 1px solid #dedede;
    border-radius: 4px;
  }
`
export const SwipeContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`
export const SwipeImage = styled.div`
  width: clamp(15rem, 40%, 20rem);
  aspect-ratio: 1;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1),
    -3px -4px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 620px) {
    width: clamp(10rem, 35%, 18rem);
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
  }
`
export const SwipeContent = styled.div`
  text-align: center;
  h3 {
    color: ${({ theme }) => theme.colors.text_p};
    font-weight: ${({ theme }) => theme.font.w_normal};
  }
  p {
    max-width: 80%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`
