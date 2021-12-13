import { CircularProgress } from "@mui/material";
import QuestionCountForm from "./forms/QuestionCount";
import QuestionManager from "./state/QuestionManager";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [count, setCount] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    if (count) {
      fetch(`https://opentdb.com/api.php?amount=${count}&type=multiple`)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((error) => {
          setData(false);
          console.log(error);
        });
    }
  }, [count]);

  if (!count) {
    return <QuestionCountForm onSubmit={setCount} />;
  } else {
    return data ? (
      <QuestionManager requestResults={data.results} />
    ) : (
      <CircularProgress />
    );
  }
}
