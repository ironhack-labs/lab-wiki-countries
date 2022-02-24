import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const getCountry = (alpha3Code) => countries.find(country => alpha3Code === country.alpha3Code);
  const { name: { official: countryName }, capital, area, borders, alpha2Code } = getCountry(alpha3Code);

  return(
    <div className="col-6 p-5">
      <div className="list-group">
        <img className="align-self-center" src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={alpha2Code} width="150"/>
        <h2 className="align-self-center">{countryName}</h2>
        <div className="d-flex border-bottom">
          <div className="col-6 align-self-start">Capital</div>
          <div className="col-6 align-self-end">{capital.join(", ")}</div>  
        </div>
        <div className="d-flex border-bottom">
          <div className="col-6 align-self-start">Area</div>
          <div className="col-6 align-self-end">{area}</div>  
        </div>
        <div className="d-flex border-bottom">
          <div className="col-6 align-self-start">Borders</div>
          <div className="col-6 d-flex flex-column align-self-end">
            {borders.map(borderAlpha3Code => {
              const { name: { official: borderName } } = getCountry(borderAlpha3Code);
              return (
                <Link
                  style={{ display: "block"}}
                  to={`/${borderAlpha3Code}`}
                  key={borderAlpha3Code}
                >
                  {borderName}
                </Link>  
            )})}
          </div>  
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
