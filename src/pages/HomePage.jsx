import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function HomePage() {

  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response)=> {
        setCountries(response.data)
      } )
      .catch((error) => {
        console.log("Error getting countries from the API...")
        console.log(error)
      })
  },[])

  // console.log(countries)

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>

        <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

          {/* <div className="list-group">
            <Link to="/ABW" className="list-group-item list-group-item-action">🇦🇼 Aruba</Link>
            <Link to="/AFG" className="list-group-item list-group-item-action">🇦🇫 Afghanistan</Link>
            <Link to="/AGO" className="list-group-item list-group-item-action">🇦🇴 Angola</Link>
            <Link to="/AIA" className="list-group-item list-group-item-action">🇦🇮 Anguilla</Link>
            <Link to="/ALA" className="list-group-item list-group-item-action">🇦🇽 Åland Islands</Link>
            <Link to="/ALB" className="list-group-item list-group-item-action">🇦🇱 Albania</Link>
            <Link to="/AND" className="list-group-item list-group-item-action">🇦🇩 Andorra</Link>
            <Link to="/ARE" className="list-group-item list-group-item-action">🇦🇪 United Arab Emirates</Link>
            <Link to="/ARG" className="list-group-item list-group-item-action">🇦🇷 Argentina</Link>
            <Link to="/ARM" className="list-group-item list-group-item-action">🇦🇲 Armenia</Link>
            <Link to="/ASM" className="list-group-item list-group-item-action">🇦🇸 American Samoa</Link>
            <Link to="/ATA" className="list-group-item list-group-item-action">🇦🇶 Antarctica</Link>
            <Link to="/FLK" className="list-group-item list-group-item-action">🇫🇰 Falkland Islands</Link>
            <Link to="/FRA" className="list-group-item list-group-item-action active">🇫🇷 France</Link>
            <Link to="/ZWE" className="list-group-item list-group-item-action">🇿🇼 Zimbabwe</Link>
          </div> */}
          <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <ul>
              {countries === null
                ? <p>loading...</p>
                : countries.length && countries.map((countryDetails, index) => {
                  return (
                    <Link to ={`${countryDetails.alpha3Code
                    }`} key={countryDetails._id}>
                      {console.log(countryDetails)}
                      <li  className="list-group-item list-group-item-action">
                        <p>{countryDetails.name.common}</p> 
                      </li>
                    </Link>
                  )
                })
              }
            </ul> 
          </div>
          

        </div>
      </div>
    </>
  );
}

export default HomePage;
