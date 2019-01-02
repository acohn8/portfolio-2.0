import React from 'react'

import EducationContainer from './EducationContainer'
import EducationHeader from './EducationHeader'
import EducationSubHeader from './EducationSubheader'
import EducationContent from './EducationContent'
import EducationText from './EducationText'

const Education = ({ school, degree, description }) => (
  <Education.Container>
    <Education.Content>
      <Education.Header>{school}</Education.Header>
      <Education.Subheader>{degree}</Education.Subheader>
      <Education.Text>{description}</Education.Text>
    </Education.Content>
  </Education.Container>
)

Education.Container = EducationContainer
Education.Header = EducationHeader
Education.Subheader = EducationSubHeader
Education.Text = EducationText
Education.Content = EducationContent

export default Education
