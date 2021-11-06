import React from "react";
import "./App.css";
import theme from "JS/React/Style/Theme";
import Root from "JS/React/Scenes/Root";
import {
  ThemeProvider,
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

function App() {
  const generateClassName = createGenerateClassName();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Root />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
