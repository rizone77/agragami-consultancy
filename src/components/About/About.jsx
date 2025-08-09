import React from "react";

const About = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600
                 py-20 px-6 md:px-20 rounded-3xl shadow-lg max-w-7xl mx-auto my-6
                 text-white"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div
          className="w-full lg:w-1/2 animate-fade-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6
                       bg-gradient-to-r from-pink-400 via-yellow-300 to-white
                       bg-clip-text text-transparent animate-gradient-x-fast"
          >
            About Agragami Consultancy
          </h2>
          <p className="text-white text-opacity-80 text-lg leading-relaxed mb-6">
            At Agragami Consultancy, we are passionate about empowering students
            to achieve their dreams of studying abroad. With expert guidance on
            visa assistance, university admissions, and document support, we make
            your journey seamless and stress-free.
          </p>
          <p className="text-white text-opacity-80 text-lg leading-relaxed mb-8">
            Our personalized approach ensures you get the best opportunities
            tailored to your unique needs. Join thousands of satisfied students
            who trust Agragami for their global education journey.
          </p>
          <button className="btn bg-white bg-opacity-20 text-white hover:bg-white hover:text-pink-600 shadow-md py-3 px-8 rounded-lg transition-transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center animate-fade-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl
                          bg-white bg-opacity-20
                          transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="About Agragami"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x-fast {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x-fast {
          background-size: 200% 200%;
          animation: gradient-x-fast 5s ease infinite;
        }
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 0.7s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
