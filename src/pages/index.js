import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/About/About'
import HomeLanding from '../components/HomeLanding/HomeLanding'
import Container from '../elements/Container'
import ProtfolioProjects from '../components/PortfolioProjects/PortfolioProjects'

const IndexPage = ({ data: { prismicHome, allPrismicProject } }) => (
  <Layout home>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HomeLanding subhead={prismicHome.data.subhead.text}>
      <About bio={prismicHome.data.bio.text} />
    </HomeLanding>
    <Container>
      <ProtfolioProjects projects={allPrismicProject.edges} />
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
  }
`
