import { useParams } from 'react-router-dom';

export function CountryDetails({ countries }) {
  const { id } = useParams;

  //   let country = props.countries.filter(
  //     (country) => country.alpha3Code === params.id
  //   );
  console.log({ countries });
  console.log(id);
  return (
    <div>
      <h1>Country is {id}</h1>
    </div>
  );
}
