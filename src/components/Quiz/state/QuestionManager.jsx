import React, { useEffect, useState } from "react";
import QuestionForm from "../forms/Question";

export default function QuestionManager({ requestResults }) {
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
    console.log(initialState);
    return initialState;
  });

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
    console.log(questions);
  });
  return (
    <QuestionForm
      questionObj={questions[currentQuestion]}
      onSubmit={handleChoice}
      key={currentQuestion} //forçar uma nova renderização ao trocar a key
    />
  );
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
