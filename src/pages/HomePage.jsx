import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-4">WikiCountries: Your Guide to the World</h1>
      <div style={{ height: "600px", overflowY: "auto", width: "900px", border: "1px solid black" }}>

      <table className="table table-striped-columns" style={{width:"900px"}}>
        <tbody>
          {countries.map((country) => {
            return (
              <tr key={country._id} className=" m-3" >
                <td className="d-flex justify-content-center p-3"><Link style={{textDecoration: "none", color: "black"}} to={`/${country.alpha3Code}`}><img style={{marginRight: "20px", width:"50px"}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />{country.name.common} </Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default HomePage;
