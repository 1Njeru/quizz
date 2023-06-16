import React from "react";
import "./Quizview.css";

const Quizview = ({ questions, currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className="question">
        <div className="question-number">
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>

      <div className="answer">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
          <button key={text} onClick={() => handleAnswerClick(isCorrect)}>
            {text}
          </button>
        ))}
      </div>
    
       <div>
      <footer className="bg-gray-900 text-white font-bold">
     <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 font-xl">
       <span className='font-xl' >© 2020 Appy. All rights reserved.</span>
        <span className='font-xl' >Terms · Privacy Policy</span> </div>
    </footer>
    </div>

    </>
  );
};

export default Quizview;
