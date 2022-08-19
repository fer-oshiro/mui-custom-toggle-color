import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.ts";
import Demo from "./components/demo.tsx";
import Custom from "./components/other.tsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <h1>Usando tema</h1>
        <Demo />
        <h1>Usando sx</h1>
        <Custom />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
