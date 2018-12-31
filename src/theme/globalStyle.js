import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(216, 33%, 97%);
}
`

export default GlobalStyle
