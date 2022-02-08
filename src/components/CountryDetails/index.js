import './CountryDetailsStyle.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';


function CountryDetails(props) {
    const {id} = useParams();
    const [country, setCountry] = useState({})

    useEffect(() => {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
          .then((apiRes) => {
            console.log(apiRes.data.name.common);
            setCountry(apiRes.data);
          })
          .then(() => {
              console.log(country)
          })
    }, [])

    return (
        <div className="col-7 ps-4 pt-2 CountryDetails">
            <h1></h1>
            <hr/>
            <p>Capital <span>Paris</span></p>
            <hr/>
            <p>Area <span>551695 km2</span></p>
            <hr/>
            <section>
                <p>Borders</p>
                <ul>
                    <li>Andorra</li>
                    <li>Andorra</li>
                    <li>Andorra</li>
                    <li>Andorra</li>
                    <li>Andorra</li>
                </ul>
            </section>
        </div>
    );
}

export default CountryDetails;