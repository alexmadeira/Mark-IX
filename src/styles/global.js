import { createGlobalStyle } from 'styled-components';

import { Fonts } from './Metrics';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration:none;
}
*:focus{
  outline:0;
}
html{
  font-size:${Fonts.Sizes.base}
}
html,
body,
#root {
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:1;
  z-index: 1;
  font-family: 'Roboto', sans-serif;
}

body, input, button{
  font-size: 16px;
}

body {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  background: #fff;
  max-width: 100vw;
  font-size:${Fonts.Sizes.root}
}

`;
