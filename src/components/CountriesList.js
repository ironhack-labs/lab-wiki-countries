import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  
    
      return countries.map ( (countryDetails, index) => {
        // return (
        //   <section key={index} className="box">
        //   <h1>{countryDetails.alpha3Code}</h1>
        //   <Link to={`/countries/${countryDetails.alpha3Code}`}>More Details</Link>
        //    </section>
        // )

        return (
          <div className="container" key={index}>
            <div className='row'>
              <div className="col-5">
                <div className="list-group">
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}></img>
            
                  <h1>{countryDetails.alpha3Code}</h1>
                  <Link to={`/countries/${countryDetails.alpha3Code}`} className="list-group-item list-group-item-action">More Details</Link>

                </div>
              </div>
            </div>
          </div>
        )
      })
    }


export default CountriesList;

