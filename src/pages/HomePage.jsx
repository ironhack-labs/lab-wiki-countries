import axios from "axios";
import {useState, useEffect} from 'react';

function HomePage(props) {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <h1>WikiCountries: Your Guide to the World</h1>
    </>
  );
}

export default HomePage;
