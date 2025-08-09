import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bannerImg from "../../assets/11-1.jpg";

const CountryDetail = () => {
  const { deshId } = useParams();
  const data = useLoaderData();
  const id = parseInt(deshId);

  const desh = data.find((desh) => desh.id === id);

  const { country, country_picture, avg_tuition_usd, avg_living_cost_usd, visa_documents } = desh;

  return (
    <div className="space-y-16 mb-20 px-6 md:px-12">
      {/* Banner Section */}
      <div className="hero bg-gradient-to-r from-blue-700 via-purple-800 to-pink-700 my-8 rounded-3xl shadow-2xl animate-gradient-x">
        <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-20 px-8 py-12 text-center lg:text-left">
          <img
            src={bannerImg}
            alt="Agragami Banner"
            className="w-full max-w-sm rounded-3xl shadow-2xl transform transition duration-700 hover:scale-110 animate-fade-slide-up"
          />
          <div className="max-w-xl animate-fade-slide-up" style={{ animationDelay: "200ms" }}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight mb-6 animate-gradient-text">
              Agragami Education Consultancy!
            </h1>
            <p className="text-white text-lg md:text-xl drop-shadow-md mb-8 leading-relaxed animate-fade-slide-up" style={{ animationDelay: "400ms" }}>
              We specialize in student visa assistance, university admissions, and comprehensive document support. 
              Let us help you unlock global educational opportunities with ease and confidence.
            </p>
            <button
              className="btn bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 text-white shadow-lg py-3 px-8 md:py-5 md:px-12 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-400 animate-pulse-on-hover"
              style={{ animationDelay: "600ms" }}
            >
              Start Your Journey Today!
            </button>
          </div>
        </div>
      </div>

      {/* Country Detail Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-shadow hover:shadow-pink-400/60 animate-fade-slide-up">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group w-full max-w-md rounded-3xl overflow-hidden shadow-xl animate-fade-slide-up" style={{ animationDelay: "200ms" }}>
            <img
              src={country_picture}
              alt={country}
              className="w-full object-cover transform transition duration-700 group-hover:scale-110 group-hover:rotate-1 rounded-3xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/25 to-pink-600/25 opacity-0 group-hover:opacity-90 transition duration-500"></div>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 animate-fade-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-pink-300 transition duration-500">
            {/* Country Title */}
            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-8 animate-gradient-text">
              {country}
            </h4>

            {/* Tuition Fee */}
            <div className="flex items-center space-x-4 mb-6 animate-fade-slide-up" style={{ animationDelay: "600ms" }}>
              <span className="p-3 bg-pink-200 rounded-full text-pink-700 text-2xl animate-pulse-slow">🎓</span>
              <p className="text-lg font-medium text-gray-800">
                Average Tuition Fee: <span className="font-bold">${avg_tuition_usd}</span>
              </p>
            </div>

            {/* Living Cost */}
            <div className="flex items-center space-x-4 mb-10 animate-fade-slide-up" style={{ animationDelay: "700ms" }}>
              <span className="p-3 bg-blue-200 rounded-full text-blue-700 text-2xl animate-pulse-slow">🏠</span>
              <p className="text-lg font-medium text-gray-800">
                Average Living Cost: <span className="font-bold">${avg_living_cost_usd}</span>
              </p>
            </div>

            {/* Visa Documents */}
            <div className="animate-fade-slide-up" style={{ animationDelay: "800ms" }}>
              <h5 className="text-2xl font-semibold text-gray-900 mb-5">Visa Documents</h5>
              <ul className="space-y-3">
                {visa_documents.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-pink-100 to-purple-200 shadow-sm hover:shadow-md transition duration-300 animate-fade-slide-up"
                    style={{ animationDelay: `${900 + idx * 100}ms` }}
                  >
                    <span className="text-pink-600 text-2xl animate-pulse-slow">📄</span>
                    <span className="text-gray-700 text-base">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 300% 300%;
          animation: gradient-x 15s ease infinite;
        }

        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 8s ease infinite;
        }

        @keyframes fade-slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 0.7s ease forwards;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-pulse-on-hover:hover {
          animation: pulse 1.5s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default CountryDetail;
