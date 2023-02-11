import { Link, useParams } from "react-router-dom";

function CountryDetails(countries, ...props){
  const params = useParams();  
  const countryDetail = countries.find((country)=>country.alpha3Code === params.idCountry);
  const countryDetailFilter = countries.filter((country)=>country.alpha3Code === params.idCountry);
  const getBorder = (border)=>{
    const country =  countries.find((country)=>country.alpha3Code === params.idCountry);
    if(country){
      return country.name.common
    }else{
      return border
    }
  }
  return(
        <div className="col-7">
        <h1>{countryDetail.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width : '30'}}>Capital</td>
              <td>{countryDetail.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryDetail.borders.map((border, index_border)=>(
                    <li key={index_border}> 
                      <Link to={`/${border}}`} >
                        {getBorder(border)}
                      </Link>
                    </li> 
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}


export default CountryDetails;