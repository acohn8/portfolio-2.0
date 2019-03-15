import styled from 'styled-components'

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
`

export default FlexGrid
