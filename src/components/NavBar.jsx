import React, { useState } from 'react'
import {
  Navbar,
  NavContainer,
  Logo,
  NavLink,
  NavButtons,
} from '../styles/navbar.styled'
import { IconButton } from '@mui/material'

import { BiMoon, BiMenu, CgClose, BiSun } from 'react-icons/all'
import { useTheme } from 'styled-components'
const navItems = [
  { name: 'Home', href: 'home', set: -30 },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Services', href: 'services' },
  { name: 'Portfolio', href: 'portfolio' },
  { name: 'Clients', href: 'testimonial' },
  { name: 'contactMe', href: 'contactme' },
]

const NavBar = ({ setMode, mode }) => {
  const [isOpened, setIsOpened] = useState(false)
  const theme = useTheme()
  const color = theme.colors.active
  const handleToggle = () => {
    const ele = document.querySelector('.elements')
    ele.classList.toggle('active')
    setIsOpened(!isOpened)
  }
  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }
  return (
    <Navbar>
      <Logo>Jeron</Logo>
      <NavContainer>
        <div className="elements">
          {navItems.map((item, key) => {
            return (
              <NavLink
                key={key}
                to={item.href}
                activeClass="activeLink"
                spy={true}
                offset={-35}
                isDynamic={true}
              >
                {item.name}
              </NavLink>
            )
          })}
        </div>
        <NavButtons>
          <IconButton
            aria-label="switch dark mode"
            className="mode"
            onClick={toggleMode}
          >
            {mode === 'light' ? (
              <BiMoon color={color} />
            ) : (
              <BiSun color={color} />
            )}
          </IconButton>
          <IconButton
            aria-label=" toggle-sidebar"
            className="toggle"
            onClick={handleToggle}
          >
            {!isOpened ? <BiMenu color={color} /> : <CgClose color={color} />}
          </IconButton>
        </NavButtons>
      </NavContainer>
    </Navbar>
  )
}

export default NavBar
