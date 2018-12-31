import React from 'react'
import ContentBox from '../../elements/ContentBox'
import AboutHeader from './AboutHeader'
import AboutText from './AboutText'
import AboutContainer from './AboutContainer'
import AboutWrapper from './AboutWrapper'

const About = ({ bio }) => (
  <About.Wrapper>
    <About.Container>
      <About.Text>{bio}</About.Text>
    </About.Container>
  </About.Wrapper>
)

About.Wrapper = AboutWrapper
About.Container = AboutContainer
About.Header = AboutHeader
About.Text = AboutText

export default About
