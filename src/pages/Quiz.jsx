import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import QuestionForm from "../components/Quiz/Form/Question";
import QuestionCountForm from "../components/Quiz/Form/QuestionCount";
import { Paper } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
export default function Quiz() {
  return (
    <>
      <Header title="General Knowledge Quiz" Icon={QuizIcon} />
      <Main>
        <Paper sx={{ padding: 2 }}>
          <QuestionCountForm onSubmit={(value) => alert(value)} />
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <QuestionForm />
        </Paper>
      </Main>
    </>
  );
}
