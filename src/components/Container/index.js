import './ContainerStyle.css'
import { CountriesList } from '..';
import CountryDetails from '../CountryDetails';
import Router from '../../Router';

function Container() {
  return (
    <div className="container">
      <div className="divSec">
        <CountriesList />
        <Router />
      </div>
    </div>
  );
}

export default Container;
