import {useParams} from "react-router-dom"
function CountryDetails(props){
    let { alpha3Code } = useParams();
    const foundCountry = props.countries.find((element) => {
        return element.alpha3Code === alpha3Code
        })
        
    return(
        <div class="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table class="table">
        <thead></thead>
        <tbody>
            <tr>
            <td>Capital</td>
            <td>{foundCountry.capital.map((capital) => {
                return <td>{capital}</td>
            })}</td>
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
            <ul>
                {foundCountry.borders.map((borders) =>{
                return <li>{borders} </li>})}
            </ul>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
    )
}
export default CountryDetails