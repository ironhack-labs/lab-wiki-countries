import { Link } from 'react-router-dom';

function CountriesList({ propCountries }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
            {propCountries.map((element) => {
              return (
                <div key={element._id} className="list-group-item list-group-item-action">
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                    alt={element.name.common}
                  />
                    <br></br>
      
                    <Link to={`/${element.alpha3Code}`}>
                      {element.name.common}
                    </Link>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
