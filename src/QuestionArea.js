import React from 'react'
import Question from './Question'

export default function QuestionArea({ questions }) {

    return (
        <div class='card-grid'>
            {questions.map(ques => {
                return <Question question={ques} key={ques.id}/>
            })}
        </div>
    )
}
