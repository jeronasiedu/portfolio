import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SkillsContainer = styled.section`
  padding: 1rem;
  max-width: 55rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`
export const Title = styled.div`
  text-align: center;
  h2 {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.text_p};
  }
  span {
    margin-bottom: 1rem;
  }
`
export const Skill = styled.div``
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`
export const SkillIcon = styled.div`
  color: ${({ theme }) => theme.colors.active};
`
export const SkillTitle = styled.div`
  h3 {
    font-weight: ${({ theme }) => theme.font.w_normal};
    color: ${({ theme }) => theme.colors.text_p};
  }
`
export const Content = styled(motion.div)`
  h4 {
    font-weight: ${({ theme }) => theme.font.w_light};
  }

  .content-loop {
    margin-block: 0.5rem;
  }
`
export const SkillContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    color: ${({ theme }) => theme.colors.text_p};
  }
`
