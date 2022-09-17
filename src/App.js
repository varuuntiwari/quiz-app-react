import { useEffect, useState } from "react";
import QuestionArea from "./QuestionArea";
import axios from 'axios'
import './app.css'


function App() {
  const [questions, setQuestions] = useState(SAMPLE)

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(res => {
        setQuestions(res.data.results.map((ques, idx) => {
          const ans = decodeString(ques.correct_answer)
          const options = [...ques.incorrect_answers.map((ans) => decodeString(ans)), ans]
          return {
            id: `${idx}-${Date.now()}`,
            question: decodeString(ques.question),
            correct: ans,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }, [])

  function decodeString(str) {
    const tmp = document.createElement('textarea')
    tmp.innerHTML = str
    return tmp.value
  }

  return (
    <div className="container">
      <QuestionArea questions={questions} />
    </div>
  );
}

const SAMPLE = [
  {
    id: "001",
    question: "sample question",
    options: [
      "option 1",
      "option 2",
      "option 3",
      "option 4"
    ],
    correct: "option none"
  }
]

export default App;