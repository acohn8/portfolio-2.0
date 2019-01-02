import React from 'react'

import ProjectContainer from './ProjectContainer'
import ProjectHeader from './ProjectHeader'
import ProjectSubHeader from './ProjectSubheader'
import ProjectContent from './ProjectContent'
import ProjectImage from './ProjectImage'
import A from '../../elements/A'
import CheckListItem from '../../elements/CheckListItem'
import CheckList from '../../elements/CheckList'

const Project = ({ name, description, image, features, link }) => (
  <Project.Container>
    {console.log(link)}
    <ProjectImage src={image} alt="Election Archive" />
    <Project.Content>
      <Project.Header>
        <Project.Link href={link} target="blank">
          {name}
        </Project.Link>
      </Project.Header>
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
Project.List = CheckList
Project.ListItem = CheckListItem
Project.Content = ProjectContent
Project.Link = A

export default Project
