import { Link, useParams } from 'react-router-dom'

function CountryDetails({ countries }){

    const { country_id } = useParams();

    const selectedCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === country_id;
    })

    



    let flag =  `https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`
    console.log(selectedCountry.capital[0])

    return (
        <div>
            <h1>{selectedCountry.name.official}</h1>
            <h5>{selectedCountry.capital[0]}</h5>
            <h5>{selectedCountry.area} km<sup>2</sup></h5>
            <ul>
            {selectedCountry.borders.map((eachBorder) => {
        const selectedBorders = countries.find((eachCountry) => {
            return eachCountry.alpha3Code===eachBorder
            })
        return (
            <li>
            {selectedBorders.name.official}
            </li>
            )
    })}
            </ul>
            <img src={flag} alt=''/>
        </div>
    )
}

export default CountryDetails