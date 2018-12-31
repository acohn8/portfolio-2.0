import React from 'react'

import EducationContainer from './EducationContainer'
import EducationHeader from './EducationHeader'
import EducationSubHeader from './EducationSubheader'
import EducationContent from './EducationContent'
import EducationText from './EducationText'

const Education = () => (
  <Education.Container>
    <Education.Content>
      <Education.Header>Georgetown University</Education.Header>
      <Education.Subheader>
        BA, Government, History (2006-2010)
      </Education.Subheader>
      <Education.Text>
        Study abroad: Siem Reap and Phnom Penh, Cambodia - 2009
      </Education.Text>
    </Education.Content>
  </Education.Container>
)

Education.Container = EducationContainer
Education.Header = EducationHeader
Education.Subheader = EducationSubHeader
Education.Text = EducationText
Education.Content = EducationContent

export default Education
