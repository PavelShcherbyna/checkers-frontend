import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
//components:
import App from "./components/app/app";
import store from "./store";
import ErrorBoundary from "./components/error-boundary/index";
//styles:
import "./index.scss";
import { theme } from "./components/theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
