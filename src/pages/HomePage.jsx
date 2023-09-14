import { Link } from "react-router-dom";
import "../App";

function HomePage(props) {
  const countryList = () => {
    if (props.countries === null) {
      return <p>Searching for data...</p>;
    }
    return props.countries.map((countryObj, index) => {
      return (
        <section key={index} className="container">
          <div className="list-group">
            <div className="list-group-item list-group-item-action">
              <h3>{countryObj.name.common}</h3>
              <Link to={"/countries/" + countryObj.id}>Visit country</Link>
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countryList()}
    </div>
  );
}

export default HomePage;
