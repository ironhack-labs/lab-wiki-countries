import { NavLink } from 'react-router-dom';

function CountryList(props) {
  return props.countries.map((element) => {
    return (
      <div className="list-group" key={element._id}>
        <a
          className="list-group-item list-group-item-action"
          href={`/${element.alpha3Code}`}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          {element.alpha3Code}
          <NavLink to={`/characters/${element.id}`}></NavLink>
        </a>
      </div>
    );
  });
}

export default CountryList;
