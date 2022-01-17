import { useEffect, useState, useRef } from "react";
import QuestionForm from "../forms/Question";
import Report from "../report/Report";
import { Button } from "@mui/material";

export default function QuestionManager({ requestResults, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(() => {
    let initialState = requestResults.map((result, index) => {
      const correctChoice = Math.floor(
        Math.random() * (result.incorrect_answers.length + 1)
      );
      let options = [...result.incorrect_answers];
      options.splice(correctChoice, 0, result.correct_answer);
      options = options.map((answer) => decodeHtml(answer));
      return {
        number: index + 1,
        question: decodeHtml(result.question),
        options,
        correctChoice,
        currentChoice: null,
      };
    });
    return initialState;
  });
  const reportRef = useRef(null);

  const handleChoice = (choice, next) => {
    let newQuestionObj = {
      ...questions[currentQuestion],
      currentChoice: choice,
    };
    let newQuestions = [...questions];
    newQuestions[currentQuestion] = newQuestionObj;
    setQuestions(newQuestions);
    if (next) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  useEffect(() => {
    if (currentQuestion > questions.length - 1) {
      let reportList = localStorage.getItem("report-list");
      let reportArray;
      if (reportList) {
        reportArray = JSON.parse(reportList);
      } else {
        reportArray = [];
      }
      reportArray.push(reportRef.current);
      localStorage.setItem("report-list", JSON.stringify(reportArray));
    }
  }, [currentQuestion, questions]);

  if (currentQuestion > questions.length - 1) {
    const totalQuestions = questions.length;
    const correctAnswers = questions.reduce((correctAnswers, question) => {
      return question.correctChoice === question.currentChoice
        ? correctAnswers + 1
        : correctAnswers;
    }, 0);
    const rating = (correctAnswers / totalQuestions) * 100;
    const report = {
      totalQuestions,
      correctAnswers,
      rating,
      questions,
    };
    reportRef.current = report;
    return (
      <>
        <Report report={report} />
        <Button sx={{ width: "100%", marginTop: 2 }} onClick={onFinish}>
          Try Again
        </Button>
      </>
    );
  } else {
    return (
      <QuestionForm
        questionObj={questions[currentQuestion]}
        onSubmit={handleChoice}
        key={currentQuestion} //forçar uma nova montagem ao trocar a key
      />
    );
  }
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
