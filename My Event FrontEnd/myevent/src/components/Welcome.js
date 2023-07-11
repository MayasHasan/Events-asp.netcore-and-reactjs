import React from "react";
import { Heading, Text,Flex, Button,Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Flex flexDirection="column" h="80vh" alignItems="center" justifyContent="center">
      <Box  width={[
      '100%', // 0-30em
      '100%', // 30em-48em
      '100%', // 48em-62em
      '100%', // 62em+
    ]}
    p={[3,4, 6, 8]}>
      <Heading fontSize={{ base: 'lg', md: '3xl', lg: '4xl'  }} textAlign={"center"} color="teal">Welcome to My Event Managment System!</Heading>
      <Text fontSize={{ base: 'sm', md: 'xl', lg: '2xl'  }} textAlign={"center"} color="black" pt="10px">Using this application , you have access to all events and book tickets</Text>
      <Flex p="20px" gap="5px" alignItems="center" justifyContent="center" direction={"column"}>
        <Link to='/login'>
        <Button fontSize={{ base: 'sm', md: 'lg', lg: 'lg', xl:'xl' }}
          colorScheme="teal"
          variant="outline"
          width={{ base: '190px', md: '230px', lg: '250px'  }}
          borderRadius="50px"
        >
          CLICK HERE TO LOG IN
        </Button>
        </Link>
        <Link to='/register'>
        <Button fontSize={{ base: 'sm', md: 'lg', lg: 'lg', xl:'xl' }}
          colorScheme="teal"
          variant="outline"
          width={{ base: '190px', md: '230px', lg: '250px' }}
          borderRadius="50px"
        >
          CLICK HERE TO REGISTER
        </Button>
        </Link>
      </Flex>
      </Box>
    </Flex>
  );
};

export default Welcome;
