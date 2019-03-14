import styled from 'styled-components'

const ContactFormInput = styled.input`
  border: ${props =>
    !props.error
      ? '0.5px solid hsl(210, 16%, 82%)'
      : '1px solid hsl(360, 67%, 44%)'};
  margin-bottom: 20px;
  height: 30px;
  padding: 5px 20px;
  font-size: 18px;
  border-radius: 5px;
  width: calc(100% - 50px);
  background-color: hsl(216, 33%, 97%);
  color: hsl(211, 10%, 53%);
  :focus {
    outline: none;
  }
`

export default ContactFormInput
