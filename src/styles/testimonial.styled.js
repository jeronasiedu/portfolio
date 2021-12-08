import styled from 'styled-components'
export const TestimonialContainer = styled.section`
  padding: 1rem;
  max-width: 55rem;
  margin-inline: auto;
  h1,
  span {
    text-align: center;
  }
  .swiper {
    padding: 0.5rem;
  }
`
export const Container = styled.div`
  padding: 0.5rem;
`
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    gap: 0.4rem;
    h4 {
      font-weight: ${({ theme }) => theme.font.w_normal};
      color: ${({ theme }) => theme.colors.text_p};
      font-size: 0.95rem;
    }
    span {
      font-size: 0.9rem;
    }
  }
`
export const Test = styled.div`
  p {
    position: relative;
    color: ${({ theme }) => theme.colors.text_p};
  }
  span {
    position: absolute;
  }
  span:nth-of-type(1) {
    top: -0.7rem;
    left: -0.4rem;
  }
  span:nth-of-type(2) {
    bottom: -0.8rem;
  }
`
