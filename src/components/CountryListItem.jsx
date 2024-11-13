import { Link } from "react-router-dom";

const CountryListItem = ({ countryCode, country2Code, countryName }) => {
  const flag = `https://flagpedia.net/data/flags/icon/72x54/${country2Code.toLowerCase()}.png`;
  return (
    <Link
      className="list-group-item list-group-item-action"
      to={`/countryDetails/${countryCode}`}
    >
      <div>
        <img src={flag} alt="Country Flag" />
      </div>
      {countryCode} {countryName}
    </Link>
  );
};

export default CountryListItem;
