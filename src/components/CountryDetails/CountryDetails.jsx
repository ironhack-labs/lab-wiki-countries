import {useParams} from 'react-router-dom';


function CountryDetails(props) {
    const {data} = props;
    const { countryAlpha } = useParams();

    const foundCountry = data.find((el) => el.alpha3Code === countryAlpha);
    console.log(foundCountry)

  return (
    <div>
       {foundCountry && (
      <div class="col-7">
           <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
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
                    {foundCountry.area} km
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
       )}
    </div>
  )
}




export default CountryDetails;