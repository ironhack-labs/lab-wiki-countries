import { NavLink } from 'react-router-dom'
function CountriesList(props) {
  return (
    <div className="list-group">
      {props.countries.map((el) => {
        return (
        <NavLink key={el._id} className="list-group-item list-group-item-action" to={`/${el.alpha3Code.toLowerCase()}`}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} alt="drapo" />
          {el.name.common}
          </NavLink>)
      })}
    </div>
  )
}


export default CountriesList;