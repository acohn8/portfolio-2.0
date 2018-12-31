import React from 'react'
import SkillsContainer from './SkillsContainer'
import SkillsListItem from './SkillsListItem'
import SkillsList from './SkillsList'
import SkillsContent from './SkillsContent'
import SkillsHeader from './SkillsHeader'

const Skills = () => (
  <SkillsContainer>
    <Skills.Content>
      <Skills.Header>Front-end</Skills.Header>
      <Skills.List>
        <Skills.ListItem>JavaScript</Skills.ListItem>
        <Skills.ListItem>React.js</Skills.ListItem>
        <Skills.ListItem>Redux</Skills.ListItem>
        <Skills.ListItem>HTML</Skills.ListItem>
        <Skills.ListItem>CSS</Skills.ListItem>
        {/* <Skills.ListItem>Ruby</Skills.ListItem>
        <Skills.ListItem>Ruby on Rails</Skills.ListItem>
        <Skills.ListItem>SQL</Skills.ListItem>
        <Skills.ListItem>git</Skills.ListItem> */}
      </Skills.List>
    </Skills.Content>
  </SkillsContainer>
)

Skills.Container = SkillsContainer
Skills.Header = SkillsHeader
Skills.Content = SkillsContent
Skills.List = SkillsList
Skills.ListItem = SkillsListItem

export default Skills
