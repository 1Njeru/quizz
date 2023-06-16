import { useState } from "react";
import "./App.css";
import QuizView from "./components/Quizview";
import ScoreView from "./components/Scoreview";

function App() {
  const questions = [
     {
      question: "Which  of this counties does not have sand unes in Kenya?",
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
                { text: "jaw", isCorrect: true }
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
  );

 <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1>
      </div>
      <div>
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
}

export default App;
