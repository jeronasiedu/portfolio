import styled from 'styled-components'
export const ContactContainer = styled.section`
  max-width: 55rem;
  margin-inline: auto;
  padding: 1rem;
  h1,
  span {
    text-align: center;
  }
`
export const Content = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Me = styled.div``
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
export const Details = styled.div`
  h3 {
    font-weight: ${({ theme }) => theme.font.w_normal};
    color: ${({ theme }) => theme.colors.text_p};
  }
  span {
    text-align: left;
    font-size: 0.9rem;
  }
`
export const Icon = styled.div``
export const Form = styled.form`
  width: 100%;
`
export const Input = styled.input`
  display: block;
  padding: 0.4rem;
  margin: 0 0 1rem;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  font-family: inherit;
  width: 100%;
  border: 1.2px solid #9af;
  background: none;
  color: ${({ theme }) => theme.colors.text_p};
  &:focus {
    border-width: 2px;
  }
`
export const TextArea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  min-height: 8rem;
  font-size: 1.1rem;
  font-family: inherit;
  padding: 0.4rem;
  color: ${({ theme }) => theme.colors.text_p};
  border: 1.4px solid #9af;
  border-radius: 0.3rem;
  background: none;
  &:focus {
    border-width: 3px;
  }
`

export const ContactForm = styled.div`
  padding-inline: 1rem;
  width: 100%;
  max-width: 22rem;
  @media (max-width: 620px) {
    margin-top: 1rem;
  }
`
