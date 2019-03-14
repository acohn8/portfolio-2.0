import styled from 'styled-components'

const ContactFormTextarea = styled.textarea`
  padding: 5px 20px;
  font-size: 18px;
  border: ${props =>
    !props.error
      ? '0.5px solid hsl(210, 16%, 82%)'
      : '1px solid hsl(360, 67%, 44%)'};
  resize: none;
  border-radius: 5px;
  width: calc(100% - 50px);
  background-color: hsl(216, 33%, 97%);
  color: hsl(211, 10%, 53%);
  :focus {
    outline: 2px solid hsl(262, 61%, 93%);
  }
`

export default ContactFormTextarea
