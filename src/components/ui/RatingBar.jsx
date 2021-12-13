import { Stack, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: theme.typography.fontSize * 2,
  borderRadius: theme.typography.fontSize,
}));

export default function RatingBar({ value, ...otherPropers }) {
  let color;
  if (value < 30) {
    color = "error";
  } else if (value < 50) {
    color = "secondary";
  } else if (value < 80) {
    color = "primary";
  } else {
    color = "success";
  }
  return (
    <Stack justifyContent={"center"} direction={"column"}>
      <BorderLinearProgress
        variant="determinate"
        value={value}
        color={color}
        {...otherPropers}
      />
      <Typography
        variant="subtitle2"
        component="span"
        position="absolute"
        alignSelf={"center"}
      >
        {value.toFixed(2)}
      </Typography>
    </Stack>
  );
}
