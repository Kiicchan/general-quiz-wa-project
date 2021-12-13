import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Answer({ questionObj }) {
  return (
    <Stack component="div" spacing={2} direction="column" maxWidth={"500px"}>
      <Typography variant="h6">
        {questionObj.number}. {questionObj.question}
      </Typography>
      <FormControl component="div">
        <RadioGroup aria-label="options" name="options">
          {questionObj.options.map((answer, index) => {
            const isCorrectChoice = questionObj.correctChoice === index;
            const isCurrentChoice = questionObj.currentChoice === index;
            return (
              <FormControlLabel
                key={index}
                disabled={!isCorrectChoice}
                checked={isCurrentChoice}
                label={answer}
                control={<Radio disableRipple color="success" />}
                sx={{
                  borderRadius: 10,
                  bgcolor:
                    isCorrectChoice && isCurrentChoice
                      ? "success.light"
                      : isCurrentChoice
                      ? "error.light"
                      : null,
                  color:
                    isCorrectChoice && !isCurrentChoice
                      ? "success.light"
                      : null,
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
