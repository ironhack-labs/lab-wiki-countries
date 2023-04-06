import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();
  return <div>CountryDetails {alpha3Code}</div>;
};

export default CountryDetails;
