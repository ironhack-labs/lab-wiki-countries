import { useParams } from "react-router-dom";




function CountryDetails (props) {


    let { codeAlpha } = useParams();

    
    

    const selectedCountry = () => {props.countrySelected.map((country) => {
        let selected = []
        if(country.alpha3Code.includes(codeAlpha)){
            console.log(country)
            return country
        }
        else {
            return null
        }
        selected = country

        



    })}
    return(
        selectedCountry
    )
<>
    <div>
            <h1>Name</h1>
      </div>
      </>
}

export default CountryDetails;