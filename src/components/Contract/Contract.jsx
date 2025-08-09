import React from "react";

const offices = [
  {
    country: "Bangladesh Office",
    address: "123 Agragami St, Dhaka, Bangladesh",
    email: "bd-office@agragami.com",
    phone: "+880 1234 567890",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
  },
  {
    country: "Finland Office",
    address: " Helsinki, Finland",
    email: "fi-office@agragami.com",
    phone: "+358 40 123 4567",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  },
];

const Contract = () => {
  return (
    <section
      className="py-20 px-8 md:px-24 rounded-3xl max-w-6xl mx-auto my-6
                 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white"
    >
      <h2
        className="text-5xl font-extrabold text-center mb-12
                   bg-gradient-to-r from-pink-400 via-yellow-300 to-white
                   bg-clip-text text-transparent animate-gradient-x-fast"
      >
        Contract & Contact Information
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contract Section */}
        <div
          className="flex-1 bg-white bg-opacity-10 rounded-3xl shadow-lg p-10
                     transform transition-transform duration-700 hover:scale-105
                     hover:shadow-2xl hover:shadow-pink-400/60"
        >
          <h3 className="text-3xl font-bold mb-6 text-white">Our Commitment</h3>
          <p className="text-white text-opacity-80 mb-6 leading-relaxed">
            At Agragami Consultancy, we promise full transparency and dedicated support.
            Our contracts clearly outline the scope of services, fees, confidentiality,
            and your rights as a student client.
          </p>
          <ul className="list-disc list-inside space-y-3 text-white text-opacity-70">
            <li>
              Clear service terms including student visa assistance and university
              admissions guidance.
            </li>
            <li>No hidden fees — honest pricing and flexible payment plans.</li>
            <li>
              Full confidentiality — your information is safe with us under GDPR and
              local laws.
            </li>
            <li>
              Support throughout your journey — from SOP writing to visa interview prep.
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div
          className="flex-1 bg-white bg-opacity-10 rounded-3xl shadow-lg p-10
                     transform transition-transform duration-700 hover:scale-105
                     hover:shadow-2xl hover:shadow-blue-400/60"
        >
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Our Offices</h3>

          <div className="space-y-10">
            {offices.map(({ country, address, email, phone, flag }, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-6 cursor-pointer
                           group transform transition-all duration-500 hover:scale-105
                           hover:shadow-lg hover:shadow-indigo-300 rounded-2xl p-5
                           bg-white bg-opacity-20"
              >
                <img
                  src={flag}
                  alt={`${country} Flag`}
                  className="w-14 h-10 object-cover rounded-md shadow-md
                             transition-transform duration-500 group-hover:rotate-[20deg]
                             group-hover:scale-110 select-none"
                />

                <div className="flex flex-col text-white text-opacity-90">
                  <h4 className="text-2xl font-semibold mb-2">{country}</h4>
                  <p className="mb-1 text-white text-opacity-70">{address}</p>
                  <p className="mb-1">
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${email}`}
                      className="text-pink-300 hover:underline"
                    >
                      {email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href={`tel:${phone}`} className="text-pink-300 hover:underline">
                      {phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation keyframes for gradient text */}
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
      `}</style>
    </section>
  );
};

export default Contract;
