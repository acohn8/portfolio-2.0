import styled from 'styled-components'

const Button = styled.button`
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'Roboto';
  outline: 0;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  &:active {
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
  }
`

export default Button
