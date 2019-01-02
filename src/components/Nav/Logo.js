import styled from 'styled-components'
import * as colors from '../../theme/colors'
import H2 from '../../elements/H2'

const Logo = styled(H2)`
  font-weight: 600;
  color: ${colors.navLogo};
  margin: 0;
  width: 100%;
  padding: 0;
  @media only screen and (max-width: 449px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 450px) {
    font-size: 36px;
  }
`

export default Logo
