import React from "react";
import { NavLink } from "react-router-dom";
import Contract from "../Contract/Contract";
import logo from '../../assets/logo.png'

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-3 py-2 font-medium transition-all ${
              isActive
                ? "text-blue-600 after:w-full"
                : "text-gray-700 hover:text-blue-500 after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-pink-500 after:rounded after:transition-all`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `relative px-3 py-2 font-medium transition-all ${
              isActive
                ? "text-blue-600 after:w-full"
                : "text-gray-700 hover:text-blue-500 after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-pink-500 after:rounded after:transition-all`
          }
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-3 py-2 font-medium transition-all ${
              isActive
                ? "text-blue-600 after:w-full"
                : "text-gray-700 hover:text-blue-500 after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-pink-500 after:rounded after:transition-all`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourJourney"
          className={({ isActive }) =>
            `relative px-3 py-2 font-medium transition-all ${
              isActive
                ? "text-blue-600 after:w-full"
                : "text-gray-700 hover:text-blue-500 after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-pink-500 after:rounded after:transition-all`
          }
        >
          Our Journey & Expertise
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            `relative px-3 py-2 font-medium transition-all ${
              isActive
                ? "text-blue-600 after:w-full"
                : "text-gray-700 hover:text-blue-500 after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-pink-500 after:rounded after:transition-all`
          }
        >
          Contract
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar rounded-xl bg-white shadow-md sticky top-5 z-50 px-6 md:px-12 py-4 my-6">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700 hover:text-blue-600 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-4 shadow-lg rounded-box w-52 bg-white"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <NavLink to="/" className="flex items-center" style={{ maxHeight: '64px' }}>
  <img
    src={logo}
    alt="Agragami Logo"
    className="h-70 object-contain -ml-10"
    style={{ marginTop: '-0.5rem', marginBottom: '-0.5rem' }}
  />
</NavLink>

      </div>

      {/* Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Call to Action Button */}
      <div className="navbar-end">
        <NavLink
          to="/contract"
          className="btn bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg
            hover:from-pink-500 hover:to-blue-500
            transition-colors duration-500
            hover:scale-105
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-pink-300
            animate-pulse-on-hover"
        >
          Get Started
        </NavLink>
      </div>

      {/* Extra animation utility */}
      <style>{`
        .animate-pulse-on-hover:hover {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
