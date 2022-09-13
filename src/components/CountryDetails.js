import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { a3 } = useParams();
  const myCountry = props.data.find((el) => el.alpha3Code.toLowerCase() === a3);
  const tdStyle={width:"30%"}
  console.log("myCountry:",myCountry)
  return (
    <div className="col-7">
            <h1>{myCountry.name.common}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry.alpha2Code.toLowerCase()}.png`} alt="drapeau"/>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Capital</td>
                  <td>{myCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {myCountry.area}km²
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {myCountry.borders.map(borderA3=>{
                        const borderCountry=props.data.find((el)=>{ return el.alpha3Code===borderA3})
                        console.log("borderCountry",borderCountry)
                        return (<li key={borderA3}><a href={`/${borderA3.toLowerCase()}`}>{borderCountry.name.common}</a></li>)
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
