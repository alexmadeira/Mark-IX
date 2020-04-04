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
  text-size-adjust: none;
}

body, input, button{
  font-size: 16px;
}

body {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  background: #000;
  max-width: 100vw;
  font-size:${Fonts.Sizes.root}
}


@media(max-width: 1300px) {
  html{
    font-size:calc(${Fonts.Sizes.base} - 10%)
  }
}
@media(max-width: 1100px) {
  html{
    font-size:calc(${Fonts.Sizes.base} - 15%)
  }
}
@media(max-width: 970px) {
  html{
    font-size:calc(${Fonts.Sizes.base} - 25%)
  }
}
@media(max-width: 780px) {
  html{
    font-size:calc(${Fonts.Sizes.base} - 20%)
  }
}
@media(max-width: 480px) {
  html{
    font-size:calc(${Fonts.Sizes.base} - 30%)
  }
}

`;
