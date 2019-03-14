import styled from 'styled-components'

const SocialIconImage = styled.img`
  margin: 0;
  background-color: ${props => (props.linkedin ? '#0077BA' : '#333334')};
  @media only screen and (min-width: 767px) {
    width: 50px;
    height: 50px;
    padding: 10px 5px;
  }
  @media only screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
    padding: 5px;
  }
`

export default SocialIconImage
