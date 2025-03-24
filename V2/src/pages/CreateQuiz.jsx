import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data";

export default function CreateQuiz() {

  const [questionText, setQuestionText] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const newQuestion = {
      question: questionText,
      options: [
        { text: option1, isCorrect: correctOption === option1 },
        { text: option2, isCorrect: correctOption === option2 },
        { text: option3, isCorrect: correctOption === option3 },
        { text: option4, isCorrect: correctOption === option4 },
      ],
    };

    questions.push(newQuestion);

    setQuestionText("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectOption("");

    navigate("/");

  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side*/}
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Create a New Quiz Question</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Home
        </button>
      </div>

      {/* Right Side: Form */}
      <div className="w-1/2 p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="question" className="text-lg mb-2">Question</label>
            <input
              type="text"
              id="question"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="option1" className="text-lg mb-2">Option 1</label>
            <input
              type="text"
              id="option1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="option2" className="text-lg mb-2">Option 2</label>
            <input
              type="text"
              id="option2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="option3" className="text-lg mb-2">Option 3</label>
            <input
              type="text"
              id="option3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="option4" className="text-lg mb-2">Option 4</label>
            <input
              type="text"
              id="option4"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="correctOption" className="text-lg mb-2">Correct Option</label>
            <select
              id="correctOption"
              value={correctOption}
              onChange={(e) => setCorrectOption(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              required
            >
              <option value="">Select Correct Option</option>
              <option value={option1}>{option1}</option>
              <option value={option2}>{option2}</option>
              <option value={option3}>{option3}</option>
              <option value={option4}>{option4}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
}
