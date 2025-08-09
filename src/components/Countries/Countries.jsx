import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('./valuable_countries.json')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className='my-10'>
      <h2 className="text-4xl font-bold text-center my-20">
        Explore Our Featured Countries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {countries.map(country => (
          <Country key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
