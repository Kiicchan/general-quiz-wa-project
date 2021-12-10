import { TextField, Typography, Stack, Button } from "@mui/material";

import { useState } from "react";

export default function QuestionCountForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (ev) => {
    const value = Number(ev.target.value);
    if (Number.isInteger(value) && value < 100) {
      value > 0 ? setValue(value) : setValue("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit && value > 0) {
      onSubmit(value);
    }
  };

  return (
    <Stack
      component="form"
      spacing={2}
      direction="column"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6">
        How many questions do you want to answer?
      </Typography>
      <TextField
        id="quiz-question-count"
        autoComplete="off"
        label="Question Count"
        placeholder="Enter a number (max: 99)"
        value={value}
        onChange={handleChange}
      />
      <Button variant="contained" size="large" type="submit">
        Start
      </Button>
    </Stack>
  );
}
