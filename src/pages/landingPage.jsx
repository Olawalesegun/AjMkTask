import { QuesBlock } from '../components/quesAnsBlock';
import questions from '../data/questions';

export default function LandingPage() {

  return (
    <div>
      <header className="">
        <h1 className="text-sm">Pre-DApp Building Quiz App</h1>
      </header>
      <QuesBlock questions={questions} />
    </div>
    
  )
}