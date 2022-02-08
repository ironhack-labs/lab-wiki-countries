import { Link } from 'react-router-dom'
const CountryList = (props) =>{
    console.log("lsprops", props)
    return(
            <div className="col-5" style={{maxheight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                    {props.countries.map((country, index) =>{
                        return(
                            <Link className="list-group-item list-group-item-action" 
                            to={country.alpha3Code}
                            key={index}
                                >{country.name.official}</Link>
                        )
                    })}
                </div>
            </div>
    )
};

export default CountryList;