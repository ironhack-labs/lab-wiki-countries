import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";


function CounrtyDetails(props) {
    
    const { countryId } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL+ '/' +countryId)
        .then(response => {
            setDetails(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
        // with json
        // const aCountry = props.countries.find(element => element.alpha3Code === countryId)
        // setDetails(aCountry);
    }, [countryId, props.countries])

    const renderDetails = () => {
        return (
            <div className='country'>
                <h2>{details.name.official}</h2>
                <p>Capital: {details.capital}</p>
                <p>Area: {details.area} km2</p>

                <NavLink to="/">Back</NavLink>
            </div>
        );
    }

    return (
        <>
            {details === null
                ? <p>loading...</p>
                : renderDetails()
            }
        </>
    );

}

export default CounrtyDetails;