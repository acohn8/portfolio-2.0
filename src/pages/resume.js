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

const ResumePage = ({ data: { prismicResume } }) => {
  const resume = prismicResume.data.body

  return (
    <Layout>
      <SEO title="Resume" keywords={['gatsby', 'application', 'react']} />
      <Container>
        <ExperienceSectionHeader>Experience</ExperienceSectionHeader>
        {resume.map((job, index) => (
          <div key={`${job}${index}`}>
            <ExperienceCompanyHeader>
              {job.primary.employer.text}
            </ExperienceCompanyHeader>
            <ExperienceCompanySubheader>
              {job.primary.location.text}
            </ExperienceCompanySubheader>
            <ExperiencesWrapper>
              {job.items.map((role, index) => (
                <Experience
                  key={`${role}${index}`}
                  title={role.title.text}
                  dates={role.dates.text}
                  tasks={role.tasks.document[0].data.body[0].items}
                />
              ))}
            </ExperiencesWrapper>
          </div>
        ))}
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
}

export const pageQuery = graphql`
  {
    prismicResume {
      data {
        body {
          primary {
            employer {
              text
            }
            location {
              text
            }
          }
          items {
            title {
              text
            }
            dates {
              text
            }
            tasks {
              document {
                data {
                  body {
                    items {
                      role {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ResumePage
