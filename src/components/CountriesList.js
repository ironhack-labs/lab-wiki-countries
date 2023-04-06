import { Link, Routes, Route} from 'react-router-dom';

function CountriesList(props) {
  
    //const {alpha3Code} : useParams();

  return (
    <div>
      {props.countriesArr.map((countryDetails) => {
        return (
          <ul>
            <li> Country name: {countryDetails.name.common}</li>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}/>
            <Link to={`/CountryDetails/${countryDetails.alpha3Code}`}>
              Press for details
            </Link>
            
                    <Routes>
                    <Route path="/CountryDetails/:id" element={ <CountryDetails /> } />
                 
                </Routes>
          </ul>
        );
      })}
    </div>
  );
}

export default CountriesList;
