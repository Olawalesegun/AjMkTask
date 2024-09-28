// import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landingPage';
import questions from './data/questions';
import { QuesBlock } from './components/quesAnsBlock';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <QuesBlock questions={questions} />
    </>
  )
}

export default App
