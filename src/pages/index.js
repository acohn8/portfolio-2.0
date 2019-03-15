import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/About/About'
import HomeLanding from '../components/HomeLanding/HomeLanding'
import Container from '../elements/Container'
import ProtfolioProjects from '../components/PortfolioProjects/PortfolioProjects'
import Skills from '../components/Skills/Skills'
import PageHeader from '../elements/PageHeader'
import FlexGrid from '../elements/FlexGrid'

const IndexPage = ({
  data: { prismicHome, allPrismicProject, allPrismicSkills },
}) => (
  <Layout home>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HomeLanding subhead={prismicHome.data.subhead.text}>
      <About bio={prismicHome.data.bio.text} />
    </HomeLanding>
    <Container>
      <PageHeader>Skills</PageHeader>
      <FlexGrid>
        {allPrismicSkills.edges.map(skillArea => (
          <Skills
            section={skillArea.node.data.skillCategory.text}
            skillItems={skillArea.node.data.body[0].skills}
          />
        ))}
      </FlexGrid>
      <ProtfolioProjects projects={allPrismicProject.edges} />
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    prismicHome {
      id
      data {
        bio {
          text
        }
        subhead {
          text
        }
      }
    }
    allPrismicProject {
      edges {
        node {
          data {
            link {
              url
            }
            order
            image {
              url
            }
            name {
              text
            }
            description {
              text
            }
            body {
              items {
                feature {
                  text
                }
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
