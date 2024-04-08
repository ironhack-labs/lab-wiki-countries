import React, { useState, useEffect } from "react";
import List from "../components/List";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
        const response = await fetch(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        const data = await response.json();

        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      <List countries={countries} />
    </>
  );
}

export default HomePage;
