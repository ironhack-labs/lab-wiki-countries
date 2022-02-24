import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams();
  console.log(countryId);
  const myCountry = props.countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });

  //   const myBorders = myCountry.borders.map((eachBorder) => {
  //     let borderCountry = props.countries.find((oneCountry) => {
  //       return oneCountry.alpha3Code === eachBorder;
  //     });

  //     return (
  //       <Link to={eachBorder} key={index}>
  //         {borderCountry.name.official}
  //       </Link>
  //     );
  //   });

  console.log(myCountry.name.official);

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
              <ul>
                {myCountry.borders.map((eachBorder, index) => {
                  return (
                    <Link to={eachBorder} key={index}>
                      {eachBorder}
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
