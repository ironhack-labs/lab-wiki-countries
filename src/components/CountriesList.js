import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  
    
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
                  {props.renderCountriesList.map((country, index)=> {
                    return(
                      <div>
                      <Link to={`/countries/${country.alpha3Code}`} className="list-group-item list-group-item-action">More Details</Link>
                      </div>
                    )
                  })}
              
                </div>
              </div>
            </div>
          </div>
        )
      })
    }


export default CountriesList;

