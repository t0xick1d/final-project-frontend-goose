import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
:root {
  /* common */
  --white-color: #ffffff;
  --button-bgd-color: #3e85f3;//*
  --color-task-low-priority: #3e85f3;
  --bgc-task-low-priority: #ceeefd;
  --color-task-medium-priority: #f3b249;
  --bgc-task-medium-priority: #fcf0d4;
  --color-task-high-priority: #ea3d65;
  --bgc-task-high-priority: #ffd2dd; 
//}
/* theme='light'*/
  --input-text-color: #616161;//*
  --user-name-color: #343434;//*
  --calendar-bg-color: #ffffff;
  --calendar-border-color: rgba(220, 227, 229, 0.5);

/* theme='dark'*/
  //--input-text-color: #ffffff;//*
  //--user-name-color: #ffffff;//*
  //--calendar-bg-color: rgba(255, 255, 255, 0.15)
  //--calendar-border-color: rgba(255, 255, 255, 0.15);
}


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}
`;
