import styled from 'styled-components'
export const FooterContainer = styled.footer`
  max-width: 55rem;
  width: 100%;
  margin-inline: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.background.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10rem;
  color: ${({ theme }) => theme.colors.text_w_p};
  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`
export const Left = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text_w_p};
  }
`
export const Middle = styled.div`
  display: flex;
  gap: 0.3rem;
  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Right = styled.div`
  align-self: flex-end;
`
export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text_w_s};
  &:hover {
    color: #fff;
  }
  h2 {
    color: ${({ theme }) => theme.colors.text_w_p};
  }
`
