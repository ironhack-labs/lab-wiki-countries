import { Box } from '@chakra-ui/react';
import CountryCard from './CountryCard';

function CountriesList(props) {
  const { countries } = props;
  return (
    <Box maxH={`calc(100vh - 64px)`} overflowY={'scroll'}>
      {countries.map((country) => {
        return <CountryCard key={country.alpha3Code} country={country} />;
      })}
    </Box>
  );
}

export default CountriesList;
