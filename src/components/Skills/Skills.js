import React from 'react'
import SkillsContainer from './SkillsContainer'
import SkillsContent from './SkillsContent'
import SkillsHeader from './SkillsHeader'
import CheckListItem from '../../elements/CheckListItem'
import CheckList from '../../elements/CheckList'
import SkillsListItem from './SkillsListItem'

const Skills = ({ section, skillItems }) => (
  <SkillsContainer>
    <Skills.Content>
      <Skills.Header>{section}</Skills.Header>
      <Skills.List>
        {skillItems.map(skill => (
          <Skills.ListItem key={skill.skill.text} icon={skill.icon.url}>
            {skill.skill.text}
          </Skills.ListItem>
        ))}
      </Skills.List>
    </Skills.Content>
  </SkillsContainer>
)

Skills.Container = SkillsContainer
Skills.Header = SkillsHeader
Skills.Content = SkillsContent
Skills.List = CheckList
Skills.ListItem = SkillsListItem

export default Skills
