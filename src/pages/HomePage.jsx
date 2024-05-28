import { Link } from "react-router-dom"
const HomePage = ({countries}) => {
    console.log(countries)
  return (
    <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
    <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
    
    <div className="list-group">
      { countries ? countries.map(c => (
        <Link to={`countries/${c.alpha3Code}`} className="list-group-item" key={c.alpha3Code} >
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${c.alpha2Code.toLowerCase()}.png`} alt="country flag" />
            <p>{c.name.common}</p>
        </Link>

      )) : <p>Loading</p>}
    </div>
  </div>
  )
}

export default HomePage

