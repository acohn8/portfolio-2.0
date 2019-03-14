import styled from 'styled-components'
import P from '../../elements/P'

const ContactFormSubmitMessage = styled(P)`
  margin-bottom: 10px;
  font-family: 'Roboto';
  color: ${props =>
    !props.error ? 'hsl(199, 84%, 55%)' : 'hsl(360, 67%, 44%)'};
`

export default ContactFormSubmitMessage
