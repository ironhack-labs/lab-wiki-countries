import {Link} from "react-router-dom"

function CountriesList(props) {
    console.log(props.listOfCountries[0].alpha3Code);
    return(
        <div>
        <div className="container">
        <div className="row">
            <div className="col-5" 
            style = {{maxHeight: '90vh', overflow: 'scroll'}} 
            >
            {props.listOfCountries.map(
                
            function(country, index) {
                // console.log(country);
    
                return(
    
                    <div key={index} className="list-group">
                        <Link 
                        className="list-group-item list-group-item-action" 
                        href={country.alpha3Code}
                        >{country.name.official}</Link>
        
            
                    </div>
                )
            })}
            </div>
        </div>
        </div>
        </div>
    )
}

export default CountriesList



