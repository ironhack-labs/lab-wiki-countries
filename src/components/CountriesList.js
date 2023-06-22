import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="row">
      {props.listOfCountries.map((element, index) => (
        <div
          key={'country links' + index}
          class="col-3"
          style={{ maxHeight: '90vh', overflow: 'scroll', margin: '1rem' }}
        >
          <Link to={`/${element.alpha3Code}`}> {element.name.common}</Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
