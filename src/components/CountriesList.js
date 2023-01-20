import { Link } from 'react-router-dom';

function CountriesList({countries}) {

    return (
        <>
            <div className="col-5" style={{maxHeight: 90 + 'vh', overflow: "scroll"}}>
                <div className="list-group">
                    
                {countries === null
                ? "loading..."
                :countries.map((country) => {
                        return(
                        <Link to={'/' + country.alpha3Code} className="list-group-item list-group-item-action">
                            <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="flag"/>
                  
                            <p>{country.name.common}</p>
                        </Link>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default CountriesList;
