import React from 'react'
import ExperienceContainer from './ExperienceContainer'
import ExperienceContent from './ExperienceContent'
import ExperienceHeader from './ExperienceHeader'
import ExperienceSubHeader from './ExperienceSubheader'
import ExperienceListItem from './ExperienceListItem'
import ExperienceList from './ExperienceList'

const Experience = ({ title, dates, tasks }) => (
  <Experience.Container>
    <Experience.Content>
      <Experience.Header>{title}</Experience.Header>
      <Experience.Subheader>{dates}</Experience.Subheader>
      <ExperienceList>
        {tasks.map((task, index) => (
          <Experience.ListItem key={`${title}${task}${index}`}>
            {task.role.text}
          </Experience.ListItem>
        ))}
      </ExperienceList>
    </Experience.Content>
  </Experience.Container>
)

Experience.Container = ExperienceContainer
Experience.Content = ExperienceContent
Experience.Header = ExperienceHeader
Experience.Subheader = ExperienceSubHeader
Experience.List = ExperienceList
Experience.ListItem = ExperienceListItem

export default Experience
