import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

:root {
  --white-color: #ffffff;
  --button-bgd-color: #3e85f3;
  --color-task-low-priority: #3e85f3;
  --bgc-task-low-priority: #ceeefd;
  --color-task-medium-priority: #f3b249;
  --bgc-task-medium-priority: #fcf0d4;
  --color-task-high-priority: #ea3d65;
  --bgc-task-high-priority: #ffd2dd; 
}

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
  background-color: var(--outlet-background-color);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li{
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
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
  list-style: none;
  margin: 0;
  padding: 0;
}
p{
  margin: 0;
  padding: 0;
}
`;
