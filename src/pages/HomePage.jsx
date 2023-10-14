import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        <h4 className="mb-4"> WikiCountries: Your Guide to the World.</h4>
        <div className="list-group">
          {state.map(country => (
            <div key={country._id} className="list-group-item d-flex justify-content-center align-items-center">
              <Link to={`/${country.alpha3Code}`} >{country.name.common}</Link>
            </div>  
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;








