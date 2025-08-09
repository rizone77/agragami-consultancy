import React from "react";
import bannerImg from "../../assets/11-1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white mb-20 rounded-3xl shadow-2xl">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/20 to-black/30 animate-pulse-slow pointer-events-none"></div>

      <div className="relative container mx-auto px-6 lg:px-16 py-16 lg:py-28 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        {/* Text content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-white animate-gradient-x">
            Agragami Education Consultancy!
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 animate-fade-slide-up">
            We specialize in student visa assistance, university admissions, and comprehensive
            document support. Let us help you unlock global educational opportunities with ease
            and confidence.
          </p>
          <Link to={'/about'}>
          <button className="btn bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold py-4 px-12 rounded-full shadow-lg hover:scale-110 hover:shadow-pink-400/60 transition-transform duration-500 animate-pulse-on-hover">
            Start Your Journey Today!
          </button>
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 max-w-sm mx-auto lg:mx-0 animate-fade-slide-up-delay">
          <img
            src={bannerImg}
            alt="Agragami Banner"
            className="rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-110 hover:rotate-3"
          />
        </div>
      </div>

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
        .animate-fade-slide-up-delay {
          animation: fade-slide-up 1.3s ease forwards;
        }
        .animate-pulse-on-hover:hover {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
