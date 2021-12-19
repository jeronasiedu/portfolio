import styled from 'styled-components'
import { Link } from 'react-scroll'
export const Navbar = styled.nav`
  max-width: 55rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: auto;
  width: 100%;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);

  transition: 0.6s;

  @media (max-width: 620px) {
    justify-content: stretch;
    min-height: 2.7rem;
  }
`
export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  .elements {
    .activeLink {
      border-bottom: 2px solid ${({ theme }) => theme.colors.active};
    }
  }

  @media (max-width: 620px) {
    .elements {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 0;
      overflow: hidden;
      transition: 0.5s ease;
      width: 100%;
      margin-right: 20%;
      opacity: 0;
    }
    .elements.active {
      opacity: 1;
      height: 17rem;
    }
  }
`
export const Logo = styled.a`
  font-size: 1.4rem;
  font-family: charm;
  margin-left: 0.2rem;
  color: ${({ theme }) => theme.colors.text_p};
  text-transform: uppercase;
  @media (max-width: 620px) {
    align-self: flex-start;
  }
`

export const NavLink = styled(Link)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.text_p};

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }
  @media (max-width: 620px) {
    font-size: 1.5rem;
  }
`
export const NavButtons = styled.div`
  position: relative;
  .toggle {
    display: none;
  }
  display: flex;
  align-items: center;
  @media (max-width: 620px) {
    .toggle {
      display: block;
      position: fixed;
      top: 0;
      right: 1rem;
    }
    .mode {
      position: fixed;
      top: 0;
      right: 15%;
    }
  }
`
