import React, { useState } from 'react'
import { SkillsContainer, Title } from '../styles/skills.styled'
import skills from '../data'
import SkillContentContainer from '../components/SkillContent'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>
        <h2>Skills</h2>
        <span>My Technical Level</span>
      </Title>
      <Grid container spacing={2}>
        {skills.map((sk, key) => {
          return <SkillContentContainer {...sk} key={key} />
        })}
      </Grid>
    </SkillsContainer>
  )
}

export default Skills
