import { Container } from '@mui/material';
import CountriesList from '../components/CountriesList';

const HomePage = ({ countries }) => {
  return (
    <Container>
      <CountriesList countries={countries} />
    </Container>
  );
};

export default HomePage;
