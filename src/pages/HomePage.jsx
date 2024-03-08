import React, { useState } from 'react'
import CountryService from '../services/CountryService';
import { useEffect } from 'react';
import Country from '../components/Country';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  
  const [countries, setCountries] = useState([]);
  
  const service = new CountryService();

  const getCountries = async () => {
      const countriesApi = await service.getCountries();
    
    //   console.log({countriesApi: countriesApi});
    
      setCountries(countriesApi);
  }

  useEffect(() => {
    getCountries()
  }, []);

  
  const displayCountries = () => {
    return countries.map((country) => {
        return <Country {...country} key={country._id}/>
    })
  }


  const searchCountries = (event) => {
    const userInput = event.target.value.toLowerCase();
    if(!!userInput.length > 0){
        console.log({userInput: userInput});
        const updatedCountries = countries.filter((country) => {
            const updatedName = country.name.official.slice(0, userInput.length).toLowerCase();
            return updatedName.includes(userInput)
        }) 
        setCountries(updatedCountries);
    } 
    else {
        getCountries();
    }
  }

  return (
    <div className="home-page">
        <h1>WikiCountries: Your Guide to the World</h1>
        <SearchBar searchCountries={searchCountries}/>
        {countries.length ? displayCountries() :  "Loading..."}
    </div>
  )
}

