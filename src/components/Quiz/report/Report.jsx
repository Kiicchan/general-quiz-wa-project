import RatingBar from "../../ui/RatingBar";
import Answer from "../report/Answer";
import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

export default function Report({ questions }) {
  const totalQuestions = questions.length;
  const correctAnswers = questions.reduce((correctAnswers, question) => {
    return question.correctChoice === question.currentChoice
      ? correctAnswers + 1
      : correctAnswers;
  }, 0);
  const rating = (correctAnswers / totalQuestions) * 100;
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6">
        You correctly answered {correctAnswers} out of {totalQuestions}{" "}
        questions
      </Typography>
      <RatingBar value={rating} />
      {questions.map((questionObj, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <Answer questionObj={questionObj} />
          </React.Fragment>
        );
      })}
    </Stack>
  );
}
