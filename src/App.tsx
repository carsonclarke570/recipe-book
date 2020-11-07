import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({});

/**
 *  Renders the application.
 *
 *  @return {JSX.Element} JSX of the application
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      Test
    </ThemeProvider>
  );
}

export default App;
