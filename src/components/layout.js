import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import './layout.css'
import Nav from './Nav/Nav'
import Container from '../elements/Container'
import H1 from '../elements/H1'
import GlobalStyle from '../theme/globalStyle'

const Layout = ({ home, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Nav home={home} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
