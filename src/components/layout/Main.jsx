import { Stack } from "@mui/material";
export default function Main(props) {
  return (
    <Stack
      flexGrow={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
      spacing={2}
    >
      {props.children}
    </Stack>
  );
}
