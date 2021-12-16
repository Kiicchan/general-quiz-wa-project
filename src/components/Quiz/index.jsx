import { CircularProgress } from "@mui/material";
import QuestionCountForm from "./forms/QuestionCount";
import QuestionManager from "./state/QuestionManager";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [count, setCount] = useState(null);
  const [data, setData] = useState(false);
  const [error, setError] = useState(null);

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
          setError(
            "Desculpe, ocorreu um erro na requisição. Tente novamente em alguns instantes"
          );
        });
    }
  }, [count]);

  if (!count) {
    return <QuestionCountForm onSubmit={setCount} />;
  } else {
    return data ? (
      <QuestionManager
        requestResults={data.results}
        onFinish={() => {
          setData(null);
          setCount(null);
        }}
      />
    ) : error ? (
      <div>{error}</div>
    ) : (
      <CircularProgress />
    );
  }
}
