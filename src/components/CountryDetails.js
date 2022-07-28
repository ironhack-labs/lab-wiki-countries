import { useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails(props) {

const {alpha3Code} = useParams();
const [country, setCountry] = useState(null);


    setCountry(() => {
        const result = props.countries.filter((element) => {
            return element.alpha3Code === alpha3Code;
        });
        return result
    });

    return (
       
            <h1>country.name.official</h1>

    );
}

export default CountryDetails;