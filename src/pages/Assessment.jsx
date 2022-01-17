import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import { Paper } from "@mui/material";
import ReportList from "../components/Reports/ReportList";
import AssessmentIcon from "@mui/icons-material/Assessment";
export default function Assessment() {
  return (
    <>
      <Header title="Assessment" Icon={AssessmentIcon} />
      <Main>
        <Paper sx={{ padding: 2 }}>
          <ReportList />
        </Paper>
      </Main>
    </>
  );
}
