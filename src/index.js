import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "@mui/material";
import { Provider } from 'react-redux';
//components:
import App from './components/app/app';
import store from './store';
//styles:
import './index.scss';
import {theme} from "./components/theme/theme";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
      

  </React.StrictMode>,
  document.getElementById('root')
);


