// COUNTRYLIST
import { Link, Outlet } from 'react-router-dom';

const CountriesList = (props) => {
  // Es un arreglo de objetos
  const { allCountries } = props;
  // El .map sirve para recorrer un arreglo y te duvuelve uno nuevo con el mismo largo que el orginal, tu puedes modificar los datos que quieres mostrar
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {allCountries.map((elemento, i) => {
              return (
                <Link
                  key={i}
                  className="list-group-item list-group-item-action"
                  to={`/countries/${elemento.cca3}`}
                >
                  {`${elemento.flag} ${elemento.name.common}`}
                </Link>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CountriesList;