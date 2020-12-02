import { Link } from 'react-router-dom'

const Allcountries = ({ name, countryCode, flag }) => {

    return (

        <div>


            <ul className="list-group-item list-group-item-action">

                <li>
                    <span><small>[{ flag }]</small> </span>

                    <Link to={`/countries/details/${countryCode}`}>{name}</Link>

                </li>

            </ul>


        </div>


    )
}
export default Allcountries