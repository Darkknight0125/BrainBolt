import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data";

function Question({ question, options, onAnswer }) {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.isCorrect)}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TakeQuiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {!quizFinished ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">Your Score: {score} / {questions.length}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => { setCurrentQuestion(0); setScore(0); setQuizFinished(false); }}
              className="px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gray-500 rounded-lg text-lg font-semibold hover:bg-gray-600 transition"
            >
              Go Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
