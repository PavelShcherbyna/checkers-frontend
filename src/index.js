import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "@mui/material";

import App from './components/app/app';
import './index.scss';
import {theme} from "./components/theme/theme";


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


