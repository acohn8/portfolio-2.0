import React from 'react'
import { Link } from 'gatsby'

import HomeLandingBackground from './HomeLandingBackground'
import HomeLandingHeader from './HomeLandingHeader'
import HomeLandingContainer from './HomeLandingContainer'
import HomeLandingWrapper from './HomeLandingWrapper'
import HomeLandingSubheader from './HomeLandingSubheader'
import HomeLandingTitleWrapper from './HomeLandingTitleWrapper'
import HomeLandingButton from './HomeLandingButton'

const HomeLanding = ({ children, subhead }) => (
  <HomeLanding.Wrapper>
    <HomeLandingBackground>
      <HomeLanding.Container>
        <HomeLanding.TitleWrapper>
          <HomeLanding.Header>Adam Cohn</HomeLanding.Header>
          <HomeLanding.Subheader>{subhead}</HomeLanding.Subheader>
          <Link to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
            <HomeLanding.Button>Contact</HomeLanding.Button>
          </Link>
        </HomeLanding.TitleWrapper>
      </HomeLanding.Container>
      {children}
    </HomeLandingBackground>
  </HomeLanding.Wrapper>
)

HomeLanding.Background = HomeLandingBackground
HomeLanding.TitleWrapper = HomeLandingTitleWrapper
HomeLanding.Header = HomeLandingHeader
HomeLanding.Subheader = HomeLandingSubheader
HomeLanding.Button = HomeLandingButton
HomeLanding.Container = HomeLandingContainer
HomeLanding.Wrapper = HomeLandingWrapper

export default HomeLanding
