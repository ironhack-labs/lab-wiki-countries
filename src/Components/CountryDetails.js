const CountryDetails = (props) => {
  console.log('ESTE ES EL OBJETO DE PROPS DE RRD', props);

  return (
    <div>
      <div className="col-7">
        <h1>{props.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{props.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {props.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {/* Lista de transitions */}
                <ul>
                  {/* {props.translations.map(elm) => (
                      <li>
                    <a href="/AND">Andorra</a>
                  </li>
                  )} */}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetails;
