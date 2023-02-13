import { useParams, Link } from "react-router-dom";

function Details({countries, ...props}){
    const params = useParams()
    //console.log("params", params, countries);

    // console.log("find --> regresa un objeto",
    //     countries.find((country)=> country.alpha3Code === params.countryID)
    // )

    // console.log("filter --> regresa un arreglo",
    //     countries.filter((country)=> country.alpha3Code === params.countryID)
    // )

    const countryDetail = countries.find((country)=> country.alpha3Code === params.countryID)
    const getName = (border)=>{
        const country = countries.find((country)=> country.alpha3Code === params.countryID)
        if(country){
            return country.name.common
        }else{
            return border
        }
    }
    
    return(
        <div className="col-7">
            <h1 className="mb-5 mt-5">{countryDetail.name.common}</h1>
            <img className="mb-5"
            style={{width: "15%"}}
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`} 
            alt="country-flag"/>

                <table className="table">
                    <thead></thead>
                    
                    <tbody>
                        <tr>
                        <td style={{width: "50%"}}>Capital</td>
                        <td>{countryDetail.capital[0]}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            {countryDetail.area} km
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                        <ul className="ps-0">
                                {countryDetail.borders.map((border, index_border)=>(
                                    <li className="list-group-item" key={index_border}>
                                        <Link
                                        to={`/${border}`}>
                                        {getName(border)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Details;