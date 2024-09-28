import { useState} from "react";
import PropTypes from 'prop-types';
// import Questions from "../data/questions";

export function QuesBlock({ questions }) {
  const [hasAnswered, setHasAnswered] = useState(Array(questions.length).fill(false));
  const [score, setScore] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsOnPage = 1;
  
  // const magicNumber = 1;

  const totalPagesToExist = Math.ceil(questions.length / itemsOnPage);

  console.log("total number of Pages to exist is: ", totalPagesToExist);

  const startingIndexForOurPage = (currentPage - 1) * itemsOnPage;
  const endingIndexForEachPage = startingIndexForOurPage + itemsOnPage;

  const actualQuestionShowingOnPage = questions.slice(startingIndexForOurPage, endingIndexForEachPage);

  function goToNextPage() {
    if(currentPage < totalPagesToExist){
      // I'm using one here because itemsOnPage is a constant of one
      // and theres no need for creating another magicNumber that would
      // be initialized to one, since ItemsOnPage is not changing
      // but ideally they don't do the same thing,
      // as I need to increment by one here to go to the next page
      setCurrentPage(currentPage + itemsOnPage);
    }
  }

  function goToPreviousPage(){
      // I'm using one here because itemsOnPage is a constant of one
      // and theres no need for creating another magicNumber that would
      // be initialized to one, since ItemsOnPage is not changing
      // but ideally they don't do the same thing,
      // as I need to decrease by one here to go to the prevous page
    if(currentPage > itemsOnPage){
      setCurrentPage(currentPage - 1);
    }
  }

  function confirmSubmission(e, correctAnswer, questionIndex){
   const entry = e.target.value;
   if(!hasAnswered[questionIndex]){
    if(entry === correctAnswer){
      setScore((prev) => prev + 5);
    } else{
      setScore((prev) => prev - 5);
    }
    setHasAnswered((prev) => {
      const newHasAnswered = [...prev];
      newHasAnswered[questionIndex] = true; // Mark this question as answered
      return newHasAnswered;
    });
   }
   
  }

  return (
    <div className="container">
      <h2> Quiz about to commence!!!</h2>
      <form className="container w-[36px] border-yellow-200">
        {questions != undefined &&
          actualQuestionShowingOnPage.map((ques, index) => {
            const indexNeededToTrackQuestion = startingIndexForOurPage + index;
            return (
            <div key={ques.id}>
                <h3>
                  {ques.id} {ques.question}
                </h3>
              <div>
                {ques.options.map((optionsInArray) => (
                  <div key={optionsInArray} className="mx-8">
                    <label >
                    <input
                      type="radio"
                      name={`question-${ques.id}`}
                      value={optionsInArray}
                      onChange={(e) => confirmSubmission(e, ques.answer, indexNeededToTrackQuestion)}
                      disabled={hasAnswered[indexNeededToTrackQuestion]}
                    />
                    <span className="ml-2">{optionsInArray}</span>
                  </label>
                  
                </div>
                ))}
              </div>
            </div>
          );
          })}
      </form>
      <br/>
      <div className="">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPagesToExist} `}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPagesToExist}>
          Next
        </button>
      </div>
      <br/>
      <div> Your Score is: {score}</div>
    </div>
  );
}


QuesBlock.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};