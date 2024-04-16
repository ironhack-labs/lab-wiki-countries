import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableCountrieDetails from "../components/TableCountrieDetails";

function CountryDetails() {

  const { alpha3Code } = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    const fetchCountryDetail = async () => {
      try {
        const country = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
        setCountry(country.data);
        setLoading(false);
      } catch(err) {
        console.log("There was an error", err);
        setLoading(false);
      }
    }

    fetchCountryDetail();
  }, [alpha3Code])

  return (
    <>
      <h2>Country Details</h2>

      <div>
        {loading ? (
          <div> 
            <h3>Loading...</h3>
          </div>
        ) : (
          <TableCountrieDetails {...country} />
        )}
     </div>
    </>
  );
}

export default CountryDetails;


