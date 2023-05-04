import { Link } from "react-router-dom";
function CountriesList({ countries }) {
    let variable=countries.alpha2Code

  const countriesListStyle = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };
  return (
    <div className="col-5" style={countriesListStyle}>
      <div className="list-group">
      {
          countries.map(country=>{
              return (<Link to={`/${country.alpha3Code}`} key={countries.alpha3Code} className="list-group-item list-group-item-action d-flex flex-column align-items-center">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                {`${country.name.common}`}</Link>)
            })
          }
      </div>
    </div>
  );
}

export default CountriesList;
