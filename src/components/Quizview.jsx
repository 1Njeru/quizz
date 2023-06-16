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
     <footer className="footer">
       <span>© 2023 Appy. All rights reserved.</span>
        <span >Terms · Privacy Policy</span> </div>
    </footer>
    </>
  );
};

export default Quizview;
