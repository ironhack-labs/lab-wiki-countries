import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>LAB-WikiCountries</Box>
        </Flex>
      </Box>
    </>
  );
}
