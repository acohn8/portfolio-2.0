import styled from 'styled-components'

const ContactFormSubmit = styled.input`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 40px;
  background-color: hsl(199, 84%, 55%);
  color: hsl(199, 17%, 99%);
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  outline: 0;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  &:active {
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
    background-color: hsl(199, 84%, 50%);
  }
`
export default ContactFormSubmit
