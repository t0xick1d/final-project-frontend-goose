import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  src: local("Inter Medium"),
        local("Inter-Medium"),
        url("fonts/Inter-Medium.ttf") format("ttf");
  font-display: swap;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  src: local("Inter SemiBold"),
        local("Inter-SemiBold"),
        url("fonts/Inter-SemiBold.ttf") format("ttf");
  font-display: swap;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  src: local("Inter Bold"),
        local("Inter-Bold"),
        url("fonts/Inter-Bold.ttf") format("ttf");
  font-display: swap;
}

@font-face {
  font-family: "Coolvetica";
    font-style: italic;
  font-weight: 400;
  src: local("Coolvetica Regular"),
        local("Coolvetica-Regular"),
        url("fonts/Coolvetica-Regular.ttf") format("ttf");
  font-display: swap;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
li{
    list-style: none;
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
}

svg{
  margin: 0;
  padding: 0;
}
ul{
    list-style: none
`;
