import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import Theme from "./components/theme/theme";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
render(
  <>
    <ThemeProvider theme={Theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
    <ToastContainer />
  </>,
  document.getElementById("root")
);
