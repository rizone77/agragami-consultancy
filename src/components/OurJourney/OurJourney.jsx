import React from "react";

const teamMembers = [
  {
    name: "xxx",
    university: "xxx of Applied Sciences",
    role: "Co-founder & SOP Specialist",
    description:
      "Having navigated the study abroad process myself, I bring practical, firsthand knowledge to help students craft genuine and compelling SOPs.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "xxxx",
    university: "xxx Applied Sciences",
    role: "Co-founder & Admission Expert",
    description:
      "With a background studying at Vaasa University of Applied Sciences, I’m dedicated to guiding students through admission complexities with ease.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "xxx",
    university: "xxx Applied Sciences",
    role: "Co-founder & Visa Consultant",
    description:
      "My own journey through the Finnish visa system empowers me to assist students in preparing flawless visa applications.",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const OurJourney = () => {
  return (
    <section
      className="py-20 px-6 md:px-20 max-w-7xl mx-auto my-6 rounded-3xl shadow-lg
                 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white"
    >
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent
                     bg-gradient-to-r from-pink-400 via-yellow-300 to-white mb-4 animate-gradient-x-fast"
        >
          Our Journey & Expertise
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto animate-fade-slide-up delay-200">
          We are three friends who personally experienced the challenges and triumphs of studying abroad in Finland. Our journey fuels our passion to guide you through yours.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        {teamMembers.map(({ name, university, role, description, img }, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-md border border-transparent
                       cursor-pointer transform transition duration-500
                       animate-fade-slide-up hover:shadow-xl hover:scale-105
                       hover:animate-glow-border"
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            <img
              src={img}
              alt={name}
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white/50
                         transition-transform duration-700 ease-in-out
                         hover:rotate-6 hover:scale-110 animate-float"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white transition-colors duration-300 hover:text-pink-300">
              {name}
            </h3>
            <p className="text-sm text-white/70 italic mb-3">{role}</p>
            <p className="text-white text-base leading-relaxed transition-opacity duration-300 hover:opacity-80">
              {description}
            </p>
            <p className="mt-4 font-medium text-white/80">{university}</p>
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

        /* Floating animation for images */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
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
      `}</style>
    </section>
  );
};

export default OurJourney;
