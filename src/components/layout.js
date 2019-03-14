import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './Nav/Nav'
import GlobalStyle from '../theme/globalStyle'
import PageContainer from '../elements/PageContainer'
import SocialIconContainer from './SocialIconContainer/SocialIconContainer'

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
      <PageContainer>
        <GlobalStyle />
        <Nav home={home} />
        {children}
        <SocialIconContainer />
      </PageContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
