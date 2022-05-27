import countriesData from '../countries.json';
import { Link, useParams } from 'react-router-dom';

function CoutriesDetails() {
  const { id } = useParams();

  const foundCountrie = countriesData.find((country) => {
    return country.alpha3Code === id;
  });

  return (
    <div>
      <h1>Country Details</h1>
      {!foundCountrie && <h2>No contry found!</h2>}

      {foundCountrie && (
        <>
          <h3>{foundCountrie.name.common}</h3>
        </>
      )}
    </div>
  );
}

export default CoutriesDetails;
