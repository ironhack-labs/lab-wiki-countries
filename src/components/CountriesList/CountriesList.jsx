import './CountriesList.css'
import { Link } from "react-router-dom";

const CountriesList = ({countries}) => {
    
    return (
        
        <section>

            <ul className="list-group mt-2 scrollSection">
            {
                countries.map((elem, idx) => {
                    return (
                        <li key={idx} className="list-group-item text-start">
                            <h5><Link to={`/${elem.alpha3Code}`}>{elem.name.official}</Link></h5>
                        </li>
                        )
                    })
                }
                
            </ul>
            

        </section>
    )
}

export default CountriesList