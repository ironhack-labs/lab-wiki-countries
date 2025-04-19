import { Link } from "react-router-dom";


function HomePage({ countries }) {

    const flagStyle =  {
        width: "30px",
        height: "20px"
    }

    const divStyle = {
        maxHeight: "90vh",
        overflow: "scroll",
    }

    const listStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <>
            <div className="container" style={divStyle}> 
                <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            </div>

            <div className="list-group">
                {countries.length !== 0 && countries.map((country) => {

                    const flagCode = country.alpha2Code.toLowerCase()
                    return(
                        <Link to={`/${country.alpha3Code}`} key={country._id} className="list-group-item list-group-item-action" style={listStyle}><img style={flagStyle} src={`https://flagpedia.net/data/flags/icon/72x54/${flagCode}.png`} alt="country-flag" />{country.name.common}</Link>
                    )
                })}
            </div>
        </>
    )
}

export default HomePage;
