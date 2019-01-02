import React from 'react'
import ExperienceContainer from './ExperienceContainer'
import ExperienceContent from './ExperienceContent'
import ExperienceHeader from './ExperienceHeader'
import ExperienceSubHeader from './ExperienceSubheader'
import CheckListItem from '../../elements/CheckListItem'
import CheckList from '../../elements/CheckList'

const Experience = ({ title, dates, tasks }) => (
  <Experience.Container>
    <Experience.Content>
      <Experience.Header>{title}</Experience.Header>
      <Experience.Subheader>{dates}</Experience.Subheader>
      <Experience.List>
        {tasks.map((task, index) => (
          <Experience.ListItem key={`${title}${task}${index}`}>
            {task.role.text}
          </Experience.ListItem>
        ))}
      </Experience.List>
    </Experience.Content>
  </Experience.Container>
)

Experience.Container = ExperienceContainer
Experience.Content = ExperienceContent
Experience.Header = ExperienceHeader
Experience.Subheader = ExperienceSubHeader
Experience.List = CheckList
Experience.ListItem = CheckListItem

export default Experience
