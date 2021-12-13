import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import { Paper } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import QuizComponent from "../components/Quiz";
export default function Quiz() {
  return (
    <>
      <Header title="General Knowledge Quiz" Icon={QuizIcon} />
      <Main>
        <Paper sx={{ padding: 2 }}>
          <QuizComponent />
        </Paper>
      </Main>
    </>
  );
}
