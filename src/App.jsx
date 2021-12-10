// import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack direction="column" minHeight="100vh">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Quiz />} />
        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
