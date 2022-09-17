import React, { useEffect, useRef, useState } from 'react'

export default function Question({ question }) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  useEffect(() => {
    setMaxHeight()
  }, [question.question, question.correct, question.options])
  
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  })

  return (
    <div
      // Sets the class `question` and `flip` if flip is set to true else ``
      className={`question ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      // Reverse the flip boolean and set if question or answer is to be shown
      onClick={() => setFlip(!flip)}
    >
      <div className='front' ref={frontEl}>
        {question.question}
        <div className='options'>
          { question.options.map(opt => {
            return <div className='option'>{opt}</div>
          }) }
        </div>
      </div>
      <div className='back' ref={backEl}>
        {question.correct}
      </div>
    </div>
  )
}