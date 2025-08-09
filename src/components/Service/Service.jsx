import React from "react";

const services = [
  {
    icon: "🎓",
    title: "Student Visa Assistance",
    description:
      "Expert guidance through the entire visa application process to ensure smooth approval.",
  },
  {
    icon: "🏫",
    title: "University Admissions",
    description:
      "Personalized university selection and admission support tailored to your goals.",
  },
  {
    icon: "📄",
    title: "Document Preparation",
    description:
      "Comprehensive document review and preparation for all necessary paperwork.",
  },
  {
    icon: "🌏",
    title: "Global Education Opportunities",
    description:
      "Explore top universities worldwide and unlock new academic horizons.",
  },
];

const Service = () => {
  return (
    <section
      className="py-16 px-6 md:px-20 max-w-7xl mx-auto my-6 rounded-3xl shadow-lg
                 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white"
    >
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent
                     bg-gradient-to-r from-pink-400 via-yellow-300 to-white mb-4 animate-gradient-x-fast"
        >
          Our Premium Services
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto animate-fade-slide-up delay-200">
          We are dedicated to helping you unlock your global education dreams with confidence and ease.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-md border border-transparent
                       cursor-pointer transform transition duration-500
                       animate-fade-slide-up hover:shadow-xl hover:scale-105
                       hover:animate-glow-border"
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            <div
              className="flex items-center justify-center w-20 h-20 rounded-full
                         bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-600
                         text-white text-6xl mb-6 shadow-lg
                         icon-bounce"
            >
              <span className="select-none">{icon}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white transition-colors duration-300 hover:text-pink-300">
              {title}
            </h3>
            <p className="text-white text-base leading-relaxed transition-opacity duration-300 hover:opacity-80">
              {description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        /* Gradient animation faster */
        @keyframes gradient-x-fast {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x-fast {
          background-size: 200% 200%;
          animation: gradient-x-fast 5s ease infinite;
        }

        /* Fade slide up */
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 0.7s ease forwards;
        }

        /* Bounce icon */
        @keyframes bounce-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10%); }
        }
        .icon-bounce:hover {
          animation: bounce-icon 0.6s ease infinite;
        }

        /* Glow border animation on card hover */
        @keyframes glow-border {
          0%, 100% {
            border-image-source: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6);
          }
          50% {
            border-image-source: linear-gradient(270deg, #ec4899, #8b5cf6, #3b82f6);
          }
        }
        .hover\\:animate-glow-border:hover {
          border-width: 3px;
          border-style: solid;
          border-image-slice: 1;
          animation: glow-border 3s linear infinite;
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.6),
                      0 0 20px rgba(139, 92, 246, 0.6),
                      0 0 25px rgba(59, 130, 246, 0.6);
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* 3D Tilt effect on card hover */
        .tilt-card {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .tilt-card:hover {
          animation: none !important; /* cancel fade-slide to avoid conflict */
          transform: scale(1.1) translateY(-12px) rotateX(6deg) rotateY(6deg);
          box-shadow: 0 20px 40px rgba(219, 39, 119, 0.4);
          border-image-slice: 1;
          border-image-source: linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6);
          border-width: 2px;
          border-style: solid;
        }
      `}</style>
    </section>
  );
};

export default Service;
