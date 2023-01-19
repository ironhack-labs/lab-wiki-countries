import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function CountryDetails() {
  const baseURL = " https://ih-countries-api.herokuapp.com/countries";

  const [details, setDetails] = useState(null);

  const { alpha3Code } = useParams();
  console.log("alphacode is........",alpha3Code);
const url = baseURL+ "/" + alpha3Code;
console.log("the url is ......",url);
  useEffect(() => {
    
    axios
      .get(url)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url]);
  const renderDetails = () => {
    return (
      <div className="box">
      <div className="card">
        <h1>{details.name.common} </h1>
        <p>{details.status}</p>
       
      </div>
      </div>
    );
  };

  return <>
  {details === null ? "loading...." : renderDetails()}
  <Link to="/">Back</Link>
  </>;
}

export default CountryDetails;
