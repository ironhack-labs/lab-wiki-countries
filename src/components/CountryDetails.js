import { useParams } from 'react-router-dom';


function CountriesDetails({propCountries}){
    let {alpha3Code} = useParams();

    console.log(useParams());
        return (
            <p>it's working {alpha3Code}</p>
        )
}

export default CountriesDetails;