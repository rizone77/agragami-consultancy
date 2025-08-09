import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white p-10 rounded-t-3xl shadow-lg">
      <nav>
        <h6 className="footer-title text-xl font-bold mb-4">Our Services</h6>
        {/* Use <a href="#sectionId"> for in-page smooth scrolling */}
        <a href="#visa-assistance" className="link link-hover block mb-2">
          Student Visa Assistance
        </a>
        <a href="#university-admissions" className="link link-hover block mb-2">
          University Admissions
        </a>
        <a href="#document-support" className="link link-hover block mb-2">
          Document Preparation
        </a>
        <a href="#global-education" className="link link-hover block mb-2">
          Global Education Opportunities
        </a>
      </nav>

      <nav>
        <h6 className="footer-title text-xl font-bold mb-4">Company</h6>
        <a href="/about" className="link link-hover block mb-2">
          About Us
        </a>
        <a href="/contact" className="link link-hover block mb-2">
          Contact
        </a>
        <a href="/careers" className="link link-hover block mb-2">
          Careers
        </a>
        <a href="/press" className="link link-hover block mb-2">
          Press Kit
        </a>
      </nav>

      <nav>
        <h6 className="footer-title text-xl font-bold mb-4">Connect With Us</h6>
        <div className="flex space-x-6">
          {/* Social icons unchanged */}
          <a
            href="https://twitter.com/AgragamiEdu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-300 transition"
          >
            {/* Twitter SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/AgragamiEdu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com/AgragamiEdu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-sm opacity-80">
          © 2025 Agragami Education Consultancy. All rights reserved.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
