import React from 'react';
import {
    Button,
    Card, CardBody, CardFooter,Stack,Heading,Text,Divider,ButtonGroup,Image, Box,SimpleGrid
  } from "@chakra-ui/react";
  import {  Link } from 'react-router-dom';
  
  import { FiEdit } from "react-icons/fi";
const DataList = (props) => {

    return (
        <><SimpleGrid   columns={{ base: '1',sm:"1", md: '3', lg: '3',xl:"4"  }} spacing={4}  justifyItems='center' ml={3}>
 {props.data.map((Item, index) => {
              return <Box  >
                <Card  h={{sm: '450px' , md: '460px', lg: '455px' ,"2xl": '455px'  }} w={"100%"}>
  <CardBody >
    <Image
    src={`https://localhost:7220/${Item.imageUrl}`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{Item.name}</Heading>
      <Text color='blue.600' fontSize='2xl'>
      {Item.date}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link to = {`/event/${Item.eventID}`}>
      <Button variant='solid' colorScheme='blue'>
      <FiEdit />
      </Button>
   </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
                
                 </Box>;
            })}
 </SimpleGrid>
        </>
    );
}

export default DataList;
