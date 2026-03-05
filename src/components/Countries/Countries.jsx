import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';
import { useState } from 'react';

const Countries = ({countriesPromise}) => {
const [visitedCountries, setVisitedCountries] = useState([]);

const [visitedFlags, setvisitedFlags] = useState([]);
    const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const handleVisitedCountry = (country) => {

  console.log(countries);
  console.log(countriesData);
    const newVisitedcountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedcountries);
  }

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setvisitedFlags(newVisitedFlags);
  }

  

  return (
    <div>
      <h1>In the countries : {countries.length}</h1>
   <h3>Total country visited: {visitedCountries.length} </h3>
   <h3>Total flags visited: {visitedFlags.length}</h3>
   <ol>
    {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}

   </ol>
   <div className='visited-flags'>
    {visitedFlags.map(flag => <img src={flag.flags?.flags.png} alt={flag.flags.flags.alt} key={flag.cca3} />)}
   </div>
      <div className='countries'>
        {countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}  />)}
      </div>
    </div>
  );
};

export default Countries;