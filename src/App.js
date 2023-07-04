import { useState } from "react";
import "./App.css";
import QuizView from "./components/Quizview";
import ScoreView from "./components/Scoreview";





function App() {
  const questions = [
     {
      question: "Which  of this counties does not have sand dunes in Kenya?",
      answers: [
        { text: "Marsabit" },
        { text: "Kwale" },
        { text: "Turkana" },
        { text: "Isiolo", isCorrect: true },
      ],
    },
    {
      question: "Where is the strongest human muscle located",
      answers: [{ text: "thigh" }, 
                { text: "arm" }, 
                { text: "jaw", isCorrect: true },
                { text: "buttocks"}, 
    ],
    },
    {
      question: "Who is the Deputy Govenor of Nairobi?",
      answers: [
        { text: "Isaac Mutuma" },
        { text: "James Njoroge Muchiri", isCorrect: true },
        { text: "Stephen Mburu" },
        { text: "Gesami James" },
      ],
    },
    {
      question: "What is the capital city of Tanzania?",
      answers: [
        { text: "Dar es Salaam" },
        { text: "Dodoma", isCorrect: true },
        { text: "Zanzibar" },
        { text: "Arusha" },
      ],
    },
    {
      question: "Which is element #79 in the periodic table and symbol is Au?",
      answers: [
        { text: "Gold", isCorrect: true },
        { text: "Vibranium" },
        { text: "Zinc" },
        { text: "Uranium" },
      ],
    },
    {
      question: "How many years is Kenya since independence?",
      answers: [
        { text: "60", isCorrect: true },
        { text: "64" },
        { text: "59" },
        { text: "63" },
      ],
    },
    {
      question: "Which is the highest peak in Mt Kenya?",
      answers: [
        { text: "Nelion" },
        { text: "Lenana" },
        { text: "Batian", isCorrect: true },
       
      ],
    },
    {
      question: "How old was Jesus when the wise men found Him??",
      answers: [
        { text: "3 days" },
        { text: "2 years" },
        { text: "12 days", isCorrect: true },
        { text: "1 year" },
      ],
    },
    {
      question: "Who is the current Auditor General?",
      answers: [
        { text: "Philomena Mwilu" },
        { text: "Martha Koome" },
        { text: "Rachel Ruto" },
        { text: "Nancy Gathungu", isCorrect: true },
      ],
    },
    {
      question: "Who changed water into wine?",
      answers: [
        { text: "Simon of Arimathea" },
        { text: "John the baptist" },
       
        { text: "Jesus Christ", isCorrect: true },
        { text: "Moses of Egypt" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };
  

  return (
    <div className="App">
    <div className="aps">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />    
      )}
      </div>
    

   
  

    </div>

  );

    
}

export default App;
