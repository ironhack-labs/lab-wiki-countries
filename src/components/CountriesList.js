import { Link } from 'react-router-dom';

export default function CountriesList(props){

    return (
        <>
            <h2>CountriesList</h2>

            {props.countriesList.map((country) => {
                return (
                    <div key={country.alpha3Code} >
                        <Link to={"/countries/" + country.alpha3Code} >{country.name.official}</Link>
                    </div>  
                )
            })}
        </>
    )
}