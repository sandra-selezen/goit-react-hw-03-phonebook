import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    whiteColor: "hsl(0, 0%, 100%)",
    blackColor: "hsl(0, 0%, 0%)",
  },
  borderRadius: "5px",
  duration: "250ms",
  timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
