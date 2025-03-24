import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Brainbolt</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/take-quiz")}
          className="px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Take Quiz
        </button>
        <button
          onClick={() => navigate("/create-quiz")}
          className="px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
        >
          Create Quiz
        </button>
      </div>
    </div>
  );
}
