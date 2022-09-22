import { Link, NavLink } from "react-router-dom";


const CountryList = ({ countries }) => {
    console.log(countries);
    let url = 'https://flagpedia.net/data/flags/icon/72x54/'


    return (
        <div >
            {countries.map((country) => {
                return (
                    <div key={country._id}>
                        <h2>{country.alpha3Code}</h2>
                        <Link to={`${url}${countries.alpha2Code}.png`} >{country._id}</Link>
                        {/* <Link>{url}{country.alpha2Code}</ Link> */}

                    </div>
                );
            })}
        </div>
    );
};

export default CountryList;