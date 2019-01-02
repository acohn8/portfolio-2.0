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

const ResumePage = ({ data: { prismicResume, allPrismicSkills } }) => {
  const resume = prismicResume.data.body.filter(
    item => item.__typename === 'PrismicResumeBodyExperience'
  )
  const education = prismicResume.data.body.filter(
    item => item.__typename === 'PrismicResumeBodyEducation'
  )

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
          {allPrismicSkills.edges.map(skillArea => (
            <Skills
              section={skillArea.node.data.skillCategory.text}
              skillItems={skillArea.node.data.body[0].skills}
            />
          ))}
        </ExperiencesWrapper>
        <ExperienceSectionHeader>Education</ExperienceSectionHeader>
        <ExperiencesWrapper>
          {education[0].items.map(educationItem => (
            <Education
              key={educationItem.degree.text}
              school={educationItem.school.text}
              degree={educationItem.degree.text}
              description={educationItem.description.text}
            />
          ))}
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
          __typename
          ... on PrismicResumeBodyExperience {
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
          __typename
          ... on PrismicResumeBodyEducation {
            items {
              school {
                text
              }
              degree {
                text
              }
              description {
                text
              }
            }
          }
        }
      }
    }
    allPrismicSkills {
      edges {
        node {
          data {
            skillCategory: category {
              text
            }
            body {
              skills: items {
                skill {
                  text
                }
                icon {
                  url
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
