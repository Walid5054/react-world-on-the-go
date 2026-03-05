import React, { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
  console.log(country);
  const [visited, setVisited] = useState(false);
  
  const handleVisited = () => {
   if(visited){    setVisited(false);
  
    
   } else{    setVisited(true);
   }
   handleVisitedCountry(country);
 
  }
  return (

    <div className='country'>
      <img src={country.flags?.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>population : {country.population.population}</p>
      <p>Area: {country.area.area} {country.area.area> 30000 ? "big country" : "small country"}</p>
      <button className={visited ? 'country-visited' : ''} onClick={handleVisited}>

        {visited ? "Visited" : "Not visited"}
      
      </button>
      <button onClick={()=>{
        handleVisitedFlag(country);
      }}>Add Visited flag</button>
    </div>
  );
};

export default Country;