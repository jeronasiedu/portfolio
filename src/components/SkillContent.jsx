import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { IconButton, Divider } from '@mui/material'
import {
  BsBraces,
  BiChevronDown,
  FiDatabase,
  MdPhotoCameraFront,
} from 'react-icons/all'
import { Progress } from 'react-sweet-progress'
import {
  Header,
  SkillIcon,
  SkillTitle,
  Content,
  SkillContent,
} from '../styles/skills.styled'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'styled-components'
const SkillMain = ({ duration, title, data, icon, initState }) => {
  const [open, setOpen] = useState(initState)
  const toggleOpen = () => {
    setOpen(!open)
  }
  const theme = useTheme()
  const color = theme.colors.text_p
  const skillVariant = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        when: 'afterChildren',
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const childVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 50,
    },
  }
  let currentIcon = <BsBraces />
  if (icon === 'FiDatabase') {
    currentIcon = <FiDatabase />
  } else if (icon === 'designIcon') {
    currentIcon = <MdPhotoCameraFront />
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Header>
          <SkillIcon>{currentIcon}</SkillIcon>
          <SkillTitle>
            <h3>{title}</h3>
            <span>{duration}</span>
          </SkillTitle>
          <IconButton
            aria-label="toggle"
            onClick={toggleOpen}
            sx={{
              transform: `${open && 'rotate(180deg)'}`,
              transition: '0.5s ease',
            }}
          >
            <BiChevronDown color={color} />
          </IconButton>
        </Header>

        <AnimatePresence>
          {open && (
            <Content
              variants={skillVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {data.map((item, key) => {
                return (
                  <motion.div
                    key={key}
                    className="content-loop"
                    variants={childVariant}
                  >
                    <SkillContent>
                      <h4>{item.name}</h4>
                      <span>{item.percent}%</span>
                    </SkillContent>
                    <Progress percent={item.percent} status="success" />
                  </motion.div>
                )
              })}
            </Content>
          )}
        </AnimatePresence>
        <Divider />
      </Grid>
    </>
  )
}

export default SkillMain
