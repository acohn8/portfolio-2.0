import React from 'react'

import FlexGrid from '../../elements/FlexGrid'
import Project from '../Project/Project'
import PageHeader from '../../elements/PageHeader'
import GhostCard from '../../elements/GhostCard'

const ProtfolioProjects = ({ projects }) => {
  const sortedProjects = projects.sort(
    (a, b) => a.node.data.order - b.node.data.order
  )
  return (
    <>
      <FlexGrid>
        <ProtfolioProjects.Header>Projects</ProtfolioProjects.Header>
        {sortedProjects.map(project => (
          <Project
            key={project.node.data.name.text}
            link={project.node.data.link.url}
            name={project.node.data.name.text}
            description={project.node.data.description.text}
            image={project.node.data.image.url}
            features={project.node.data.body[0].items}
          />
        ))}
        {sortedProjects.length % 2 !== 0 && <GhostCard />}
      </FlexGrid>
    </>
  )
}

ProtfolioProjects.Grid = FlexGrid
ProtfolioProjects.Header = PageHeader

export default ProtfolioProjects
