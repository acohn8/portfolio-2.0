import styled from 'styled-components'

const SocialIconWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  max-width: 150px;
  @media only screen and (min-width: 767px) {
    display: flex;
    flex-flow: column;
    max-height: 150px;
    background-color: #0077ba;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
    max-height: 150px;
    align-content: center;
    justify-content: center;
  }
`
export default SocialIconWrapper
