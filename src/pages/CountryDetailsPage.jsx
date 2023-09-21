import React from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
    const { alpha3Code } = useParams();

    // const [countryData, setCountryData] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {

    //     const countryURL = `${apiURL}/${alpha3Code}`;
    

    //     axios.get(countryURL)
    //       .then((response) => {
    //         setCountryData(response.data);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching country data:", error);
    //         setLoading(false);
    //       });
    //   }, [alpha3Code]);

    return (
        <div>
      <h1>Country Details</h1>
      <h2>Alpha3Code: {alpha3Code}</h2>
    </div>
  );
}

export default CountryDetails;
