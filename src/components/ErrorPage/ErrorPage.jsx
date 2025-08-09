import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white px-6">
      <h1
        className="text-9xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-white animate-gradient-x"
        style={{ WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text" }}
      >
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-slide-up">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold py-4 px-12 rounded-full shadow-lg hover:scale-110 hover:shadow-pink-400/60 transition-transform duration-500 animate-pulse-on-hover"
      >
        Back to Home
      </button>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 1s ease forwards;
        }
        .animate-pulse-on-hover:hover {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default ErrorPage;
