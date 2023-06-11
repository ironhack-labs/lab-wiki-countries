import { Card, Heading, CardBody, Image, Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  const { country } = props;

  return (
    <Link to={`/${country.alpha3Code}`}>
      <Card mb={4}>
        <CardBody maxW="sm">
          <Flex direction={'column'} align={'center'}>
            <Box mb={2}>
              <Image
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>

            <Box>
              <Heading size="md">{country.name.common}</Heading>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}
