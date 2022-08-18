import {useParams, Link} from 'react-router-dom';


function CountryDetails(props) {
    const {data} = props;
    const { countryAlpha } = useParams();

    const foundCountry = data.find((el) => el.alpha3Code === countryAlpha);
    console.log(foundCountry)

  return (
    <div>
      <div class="col-7">
            <h1>{foundCountry.name.common}</h1>
             
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km2
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                   {foundCountry.borders.map((cBorder) => {
                    return (
                    <ul>
                      <li>{cBorder}</li>
                     
                    </ul>
                    )
                })}
                  </td> 
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  )
}




export default CountryDetails;