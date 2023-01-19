import { Link } from 'react-router-dom'
function CountriesList(props) {
    console.log(props)
    return (
        <>
                {
                    props.countriesList.map((countryDetails) => {
       
                        return (
                            <div key={countryDetails.name.common}>
                                <h1>{countryDetails.name.common} </h1>
                                <Link to={'/countries' + countryDetails.alpha3Code}>More Details </Link>
                            </div>
                        )
                    })
                }
                    
    </>      
  );
}
export default CountriesList;
