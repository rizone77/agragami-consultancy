import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { id, country: countryName, country_picture } = country;

  return (
    <Link to={`/desh/${id}`} className="group block rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={country_picture}
          alt={countryName}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          {countryName}
        </h3>
      </div>
    </Link>
  );
};

export default Country;
