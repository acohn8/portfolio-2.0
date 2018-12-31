import React from 'react'

import ProjectContainer from './ProjectContainer'
import ProjectHeader from './ProjectHeader'
import ProjectList from './ProjectList'
import ProjectListItem from './ProjectListItem'
import ProjectSubHeader from './ProjectSubheader'
import ProjectContent from './ProjectContent'
import ProjectImage from './ProjectImage'

const Project = ({ name, description, image, features }) => (
  <Project.Container>
    <ProjectImage src={image} alt="Election Archive" />
    <Project.Content>
      <Project.Header>{name}</Project.Header>
      <Project.Subheader>{description}</Project.Subheader>
      <Project.List>
        {features.map(feature => (
          <Project.ListItem key={feature.feature.text}>
            {feature.feature.text}
          </Project.ListItem>
        ))}
      </Project.List>
    </Project.Content>
  </Project.Container>
)

Project.Container = ProjectContainer
Project.Header = ProjectHeader
Project.Subheader = ProjectSubHeader
Project.List = ProjectList
Project.ListItem = ProjectListItem
Project.Content = ProjectContent

export default Project
