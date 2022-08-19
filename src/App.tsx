import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Demo from "./components/demo";
import Custom from "./components/other";

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <h1>Usando tema</h1>
      <Demo />
      <h1>Usando sx</h1>
      <Custom />
    </ThemeProvider>
  </StyledEngineProvider>
  )
}

export default App
