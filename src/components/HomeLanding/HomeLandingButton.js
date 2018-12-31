import styled from 'styled-components'
import Button from '../../elements/Button'

const HomeLandingButton = styled(Button)`
  font-size: 24px;
  font-weight: 500;
  padding: 10px 40px;
  background-color: hsl(199, 84%, 55%);
  color: hsl(199, 17%, 99%);
  margin-top: 20px;
  &:active {
    background-color: hsl(199, 84%, 50%);
  }
`

export default HomeLandingButton
