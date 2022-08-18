import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      {countries &&
        countries.map((e) => {
          return (
            <>
              <div key={e.cca3} className="container">
                <div className="row">
                  <div className="col-5 max-height: 90vh; overflow: scroll">
                    <div className="list-group">
                      <img src={e.flags.png} alt="" />
                      <Link to={`/countryDetails/${e.cca3}`}>
                        <h3 className="list-group-item list-group-item-action">
                          {e.name.common}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default CountriesList;

// {!loading &&
//     apartments.map((apartment) => {
//       return (
//         <div key={apartment._id} className="card">
//           <img src={apartment.img} alt="apartment" />
//           <h3>{apartment.title}</h3>
//           <p>Price per day : {apartment.pricePerDay}</p>
//         </div>
//       );
//     })}
