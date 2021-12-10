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

const questionTemp = {
  question: "A stimpmeter measures the speed of a ball over what surface?",
  options: [
    "Football Pitch",
    "Cricket Outfield",
    "Pinball Table",
    "Golf Putting Green",
  ],
  number: 5,
};

export default function Question() {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value) {
      alert(questionTemp.options[value]);
    } else {
      setError(true);
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
        {questionTemp.number}. {questionTemp.question}
      </Typography>
      <FormControl component="fieldset">
        <FormLabel error={error} component="legend">
          Options
        </FormLabel>
        <RadioGroup
          aria-label="options"
          name="options"
          onChange={handleRadioChange}
        >
          {questionTemp.options.map((answer, index) => {
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
        <Button sx={{ alignSelf: "end" }} type="submit" variant="outlined">
          Next
        </Button>
      </FormControl>
    </Stack>
  );
}
