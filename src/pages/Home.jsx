import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import { Paper, Typography, Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
));
export default function Home() {
  return (
    <>
      <Header title="Home" Icon={HomeIcon} />
      <Main>
        <Paper>
          <Stack spacing={2} margin={2} sx={{ maxWidth: 500 }}>
            <Typography variant="h5">Welcome to General Quiz!</Typography>
            <Typography variant="h6">
              Here you can test your knowledge and answer some questions about
              various topics. Feel free to come back and read your previous
              results in the Assessment page.
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Button
                variant="outlined"
                to="/assessment"
                component={LinkBehavior}
              >
                <LeftIcon sx={{ padding: 0 }} />
                Assessment
              </Button>
              <Button
                type="submit"
                variant="contained"
                to="/quiz"
                component={LinkBehavior}
              >
                Quiz
                <RightIcon />
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Main>
    </>
  );
}
