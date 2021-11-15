import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);