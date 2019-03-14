import styled from 'styled-components'

const SocialIconImage = styled.img`
  width: 50px;
  height: 100%;
  padding: 5px;
  margin: 0;
  background-color: ${props => (props.linkedin ? '#0077BA' : '#333334')};
`

export default SocialIconImage
