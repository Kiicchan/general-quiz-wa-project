import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

// const questionTemp = {
//   question: "A stimpmeter measures the speed of a ball over what surface?",
//   options: [
//     "Football Pitch",
//     "Cricket Outfield",
//     "Pinball Table",
//     "Golf Putting Green",
//   ],
//   number: 5,
// };

export default function Question({ questionObj, onSubmit }) {
  const [value, setValue] = useState(questionObj.currentChoice);
  const [error, setError] = useState(false);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== null) {
      onSubmit(Number(value), true);
    } else {
      setError(true);
    }
  };

  const handleBack = () => {
    onSubmit(Number(value), false);
  };

  return (
    <Stack
      component="form"
      spacing={2}
      direction="column"
      maxWidth={"500px"}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6">
        {questionObj.number}. {questionObj.question}
      </Typography>
      <FormControl component="fieldset">
        <FormLabel error={error} component="legend">
          Options
        </FormLabel>
        <RadioGroup
          aria-label="options"
          name="options"
          value={value}
          onChange={handleRadioChange}
        >
          {questionObj.options.map((answer, index) => {
            return (
              <FormControlLabel
                value={index}
                key={index}
                control={<Radio />}
                label={answer}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Stack direction="row" justifyContent="space-between">
        <Button
          onClick={handleBack}
          variant="outlined"
          disabled={questionObj.number === 1}
        >
          Back
        </Button>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
