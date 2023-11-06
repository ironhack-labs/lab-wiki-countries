import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function HomePage() {

  const [state, setState] = useState(null)

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries`)
      .then(res => res.json())
      .then(data => {
        setState(data)
      })
      .catch(error => console.log(`Error fetching data: `, error))
  }, [])

  if( state === null ){

    return <div>loading...</div>

  } 

  return (

    <>
      <section className="container mt-5"> 
        <h1 className="mb-4"> WikiCountries: Your Guide to the World.</h1>
        <div className="cards">
          {state.map(country => (
            <div key={country._id} className="list-group-item flex justify-content-center align-items-center" style={{ border: '1px solid gray' }}>
              <Link to={`/${country.alpha3Code}`} >{country.name.common}
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${ country.alpha2Code.toLowerCase() }.png`} alt={country.common} className="me-2"/>
              </Link>
            </div>  
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;