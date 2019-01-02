import styled from 'styled-components'
import checkIcon from '../../static/icon-check.svg'

const SkillsListItem = styled.li`
  background: ${props =>
      props.icon !== null ? `url(${props.icon})` : `url(${checkIcon})`}
    left center;
  color: hsl(211, 10%, 53%);
  background-repeat: no-repeat;
  background-size: 20px;
  list-style-type: none;
  font-weight: 400;
  font-size: 18px;
  padding: 0px 0px 3px 35px;
  margin-bottom: 36px;
  line-height: 24px;
`

export default SkillsListItem
