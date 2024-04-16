import axios from "axios";
import { useState, useEffect } from "react";
import TableCountries from "../components/TableCountries";

function HomePage() {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const findCountries = async () => {
      try {
        const countries = await axios.get("https://ih-countries-api.herokuapp.com/countries");
        setCountry(countries.data);
      } catch(err) {
        console.log("There was an error", err);
      }
    }

    findCountries();
  }, [])

  return (
    <>
      <h2 className="my-5">WikiCountries: Your Guide to the World</h2>
      <section className="my-5">
        {country.map((element) => (
          <TableCountries key={element._id} {...element}/>
        ))}
      </section>
    </>
  )
}

export default HomePage;
