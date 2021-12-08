import styled from 'styled-components'
import { motion } from 'framer-motion'
export const ServicesContainer = styled.section`
  padding: 1rem;
  max-width: 55rem;
  margin-inline: auto;
  position: relative;

  h1 {
    color: ${({ theme }) => theme.colors.text_p};
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
  span {
    color: ${({ theme }) => theme.colors.text_s};
    margin-bottom: 2rem;
  }
  h1,
  span {
    text-align: center;
    display: block;
  }
`
export const CardContent = styled(motion.div)`
  min-height: 15rem;
  width: 100%;
  background: ${({ theme }) => theme.background.card};
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1), 2px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1), 2px 6px 6px rgba(0, 0, 0, 0.1);
  }
  .content {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    p {
      color: ${({ theme }) => theme.colors.active};
      font-size: 1.2rem;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text_p};
      font-weight: ${({ theme }) => theme.font.w_normal};
    }
  }
`
export const Button = styled.div`
  display: flex;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  border-radius: 4px;
  font-family: inherit;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.active};
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.font.w_normal};
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    letter-spacing: 2px;
  }
  .arrow {
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  &:hover .arrow {
    transform: translateX(0.2rem);
  }
`
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(18rem, 50vw, 22rem);
  background: ${({ theme }) => theme.background.card};
  border-radius: 0.5rem;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1), 2px 4px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  .modal-controls {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #modal-title {
    color: ${({ theme }) => theme.colors.text_p};

    font-weight: ${({ theme }) => theme.font.w_normal};
    text-transform: uppercase;
  }
`
export const ModalList = styled.div`
  li {
    padding: 0.5rem;
    width: 100%;
    background: #fff;
    box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease-out;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  li span {
    color: #25bcff;
    transition: 0.5s ease;
  }
  li:hover span {
    color: #fff;
  }
  li:hover {
    background: #25bcff;
    box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`
