import React from 'react'

import FlexGrid from '../../elements/FlexGrid'
import Project from '../Project/Project'
import PageHeader from '../../elements/PageHeader'

const ProtfolioProjects = ({ projects }) => (
  <>
    <FlexGrid>
      <ProtfolioProjects.Header>Projects</ProtfolioProjects.Header>
      {projects.map(project => (
        <Project
          key={project.node.data.name.text}
          link={project.node.data.link.url}
          name={project.node.data.name.text}
          description={project.node.data.description.text}
          image={project.node.data.image.url}
          features={project.node.data.body[0].items}
        />
      ))}
    </FlexGrid>
  </>
)

ProtfolioProjects.Grid = FlexGrid
ProtfolioProjects.Header = PageHeader

export default ProtfolioProjects
