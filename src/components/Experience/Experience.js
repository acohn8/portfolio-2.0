import React from 'react'
import ExperienceContainer from './ExperienceContainer'
import ExperienceContent from './ExperienceContent'
import ExperienceHeader from './ExperienceHeader'
import ExperienceSubHeader from './ExperienceSubheader'
import ExperienceListItem from './ExperienceListItem'
import ExperienceList from './ExperienceList'

const Experience = () => (
  <Experience.Container>
    <Experience.Content>
      <Experience.Header>Political Director</Experience.Header>
      <Experience.Subheader>March 2016 - April 2018</Experience.Subheader>
      <ExperienceList>
        <Experience.ListItem>
          Managed team of analysts and fellows producing Atlas Project Roadmap
          Reports, post-election analysis, weekly newsletters, and developing
          the Online Toolkit
        </Experience.ListItem>

        <Experience.ListItem>
          Planned and executed ad hoc research projects from Atlas clients
          including labor unions, political action committees, and consultants
        </Experience.ListItem>

        <Experience.ListItem>
          Analyzed voter registration, polling, economic, media spending, and
          demographic data for reports and blog posts
        </Experience.ListItem>

        <Experience.ListItem>
          Edited, revised, and provided feedback on colleagues’ written work
        </Experience.ListItem>
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
