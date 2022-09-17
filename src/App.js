import { useState } from "react";
import QuestionArea from "./QuestionArea";

function App() {
  const [questions, setQuestions] = useState(QUESTIONS)
  return (
    <QuestionArea questions={questions} />
  );
}

const QUESTIONS = [
  {
    id: "001",
    question: "What is my name?",
    options: [
      "My name",
      "Your name",
      "No name",
      "varuuntiwari"
    ],
    correct: 0
  },
  {
    id: "002",
    question: "What is your name?",
    options: [
      "My name",
      "Your name",
      "No name",
      "varuuntiwari"
    ],
    correct: 1
  }
]

export default App;