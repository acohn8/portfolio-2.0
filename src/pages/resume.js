import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../elements/Container'
import Experience from '../components/Experience/Experience'
import H2 from '../elements/H2'
import ExperiencesWrapper from '../components/Experience/ExperiencesWrapper'
import ExperienceSectionHeader from '../components/Experience/ExperienceSectionHeader'
import ExperienceCompanyHeader from '../components/Experience/ExperienceCompanyHeader'
import ExperienceCompanySubheader from '../components/Experience/ExperienceCompanySubheader'
import Skills from '../components/Skills/Skills'
import Education from '../components/Education/Education'

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" keywords={['gatsby', 'application', 'react']} />
    <Container>
      <ExperienceSectionHeader>Experience</ExperienceSectionHeader>
      <ExperienceCompanyHeader>The Atlas Project</ExperienceCompanyHeader>
      <ExperienceCompanySubheader>Washington, D.C.</ExperienceCompanySubheader>
      <ExperiencesWrapper>
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </ExperiencesWrapper>
      <ExperienceCompanyHeader>
        Maryland Secretary of State
      </ExperienceCompanyHeader>
      <ExperienceCompanySubheader>
        Annapolis, Maryland
      </ExperienceCompanySubheader>
      <ExperiencesWrapper>
        <Experience />
      </ExperiencesWrapper>
      <ExperienceCompanyHeader>
        Friends of Martin O'Malley
      </ExperienceCompanyHeader>
      <ExperienceCompanySubheader>
        Baltimore, Maryland
      </ExperienceCompanySubheader>
      <ExperiencesWrapper>
        <Experience />
      </ExperiencesWrapper>
      <ExperienceSectionHeader>Skills</ExperienceSectionHeader>
      <ExperiencesWrapper>
        <Skills />
        <Skills />
      </ExperiencesWrapper>
      <ExperienceSectionHeader>Education</ExperienceSectionHeader>
      <ExperiencesWrapper>
        <Education />
        <Education />
      </ExperiencesWrapper>
    </Container>
  </Layout>
)

export default ResumePage
