import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      {
        props.countries.map(el => {
          return (
            <Link className="list-group-item list-group-item-action" to={`/${el.alpha3Code}`} key={el.alpha3Code}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} /> {el.name.common}
            </Link>
          )
        })
      }
    </div>
  );
}
export default CountriesList;
