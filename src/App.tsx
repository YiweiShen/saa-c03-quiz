import { useState } from 'react'
import Quiz from 'react-quiz-component'
import quiz from './quiz'
import './App.css'

function App() {
  const [, setQuizResult] = useState()

  return (
    <div style={{ margin: 'auto' }}>
      <Quiz
        quiz={quiz}
        shuffle
        shuffleAnswer
        showInstantFeedback
        onComplete={setQuizResult}
        timer={3600}
        allowPauseTimer={false}
      />
    </div>
  )
}

export default App
