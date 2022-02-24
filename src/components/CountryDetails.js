import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams();
  const myCountry = props.countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });

  const myBorders = myCountry.borders.map((eachBorder, index) => {
    let borderCountry = props.countries.find((oneCountry) => {
      return oneCountry.alpha3Code === eachBorder;
    });

    return (
      <Link className="list-group-item " to={`/${eachBorder}`} key={index}>
        {borderCountry.name.official}
      </Link>
    );
  });

  return (
    <div className="col-7">
      <h1>{myCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            {/* <td style="width: 30%">Capital</td> */}
            <td>{myCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {myCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{myBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
