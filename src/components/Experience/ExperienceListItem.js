import styled from 'styled-components'

import checkIcon from '../../static/icon-check.svg'
import * as colors from '../../theme/colors'

const ExperienceListItem = styled.li`
  color: hsl(211, 10%, 53%);
  background: url(${checkIcon}) left center;
  background-repeat: no-repeat;
  background-size: 30px;
  list-style-type: none;
  font-weight: 400;
  font-size: 18px;
  padding: 0px 0 3px 45px;
  margin-bottom: 36px;
  line-height: 24px;
`

export default ExperienceListItem
