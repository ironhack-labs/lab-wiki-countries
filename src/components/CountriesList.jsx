import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [listCountry, setListCountry] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setListCountry(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(listCountry);

  if (isFetching === true) {
    return <h3>...loading</h3>;
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {listCountry.map((eachCountry) => {
              return (
                <div key={eachCountry._id}>
                  <Link className="list-group-item list-group-item-action">
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                      alt="img"
                    />
                    <h6>{eachCountry.name.common}</h6>
                  </Link>
                </div>
              );
            })}
            <h3>Hola</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
