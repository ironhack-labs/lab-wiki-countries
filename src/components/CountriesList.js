import { Link } from "react-router-dom";

function CountriesList (props) {
    console.log(props.countriesArr[0].name);

    return (
        <div>
        {props.countriesArr.map(() => {

    return (
        <ul>
        <li> Country name: {props.countriesArr[0].name}</li>
        </ul>
      
    )

        })

            
        }
    <Link></Link>

        </div>
      
    )
}

export default CountriesList;