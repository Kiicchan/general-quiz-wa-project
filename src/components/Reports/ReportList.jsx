import ReportItem from "./ReportItem";
import { Divider, Stack, Typography, IconButton, Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const styles = (theme) => ({
  widthQuery: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "70vw",
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "50vw",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "30vw",
    },
  },
});

function ReportList(props) {
  const { classes } = props;
  const [data, setData] = useState(() => {
    const reportList = localStorage.getItem("report-list");
    let reportArray;
    if (reportList) {
      reportArray = JSON.parse(reportList);
    } else {
      reportArray = [];
    }
    return reportArray;
  });
  const firstUpdate = useRef(true);
  const handleDelete = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    localStorage.setItem("report-list", JSON.stringify(data));
  }, [data]);

  return (
    <Stack direction="column" spacing={2} className={classes.widthQuery}>
      {data.length === 0 ? (
        <Typography variant="h6" textAlign={"center"}>
          There are no saved reports.
        </Typography>
      ) : (
        <Typography variant="h6">Reports</Typography>
      )}
      {data.map((report, index) => {
        return (
          <React.Fragment key={index}>
            <Divider />
            <Stack direction="row" spacing={2}>
              <ReportItem report={report} />
              <Box>
                <IconButton
                  onClick={() => handleDelete(index)}
                  sx={{ ":hover": { color: "error.main" } }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Stack>
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

export default withStyles(styles)(ReportList);
