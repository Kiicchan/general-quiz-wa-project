import Home from "./pages/Home";
import { useState, useMemo } from "react";
import Quiz from "./pages/Quiz";
import Assessment from "./pages/Assessment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { ColorModeProvider } from "./contexts/ColorModeContext";

function App() {
  const [colorMode, setColorMode] = useState("dark");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode]
  );
  return (
    <ColorModeProvider setColorMode={setColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack direction="column" minHeight="100vh">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/assessment" element={<Assessment />} />
            </Routes>
          </Router>
        </Stack>
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;
