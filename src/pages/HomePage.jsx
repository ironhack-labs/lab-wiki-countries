import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCountriesList(response);
        //console.log(countriesList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {countriesList.map((eachCountry) => {
        return (
          <Link to={`/${eachCountry.alpha3Code}`} key={eachCountry.alpha3Code} style={{textDecoration:"none"}}>
            <div style={{color:"black", fontSize: "20px", border:"1px solid lightgray", padding:"10px 0", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="" width={100}/>
              {eachCountry.name.official}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
