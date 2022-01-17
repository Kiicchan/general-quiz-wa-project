import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import Report from "../Quiz/report/Report";
import RatingBar from "../ui/RatingBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ReportItem({ report }) {
  const [open, setOpen] = useState(false);
  const { rating } = report;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box>
        <IconButton onClick={handleClick}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Box>
      <Box flexGrow={1} alignSelf={"center"}>
        {open ? (
          <Report report={report} />
        ) : (
          <>
            <RatingBar value={rating} />
          </>
        )}
      </Box>
    </>
  );
}
