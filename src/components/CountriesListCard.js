import './CountriesListCard.css';
import { Link } from 'react-router-dom';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import RouteParams from './RouteParams';

const CountriesListCard = ({name, cca3}) => {
  return (
    <ul>
      <li>
        <Link to="/country" activeClassName="active-section">
          {name}
        </Link>
      </li>
    </ul>
  );
};

export default CountriesListCard