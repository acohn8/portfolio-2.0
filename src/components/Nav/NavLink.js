import styled from 'styled-components'
import * as colors from '../../theme/colors'

const NavLink = styled.div`
  margin: 0;
  color: ${colors.lightSubheader};
  padding: 0 10px;
  margin: 0 10px;
  font-family: 'Roboto';
  font-weight: 400;

  @media only screen and (max-width: 449px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 450px) {
    font-size: 20px;
  }
`

export default NavLink
