import {
  Box,
  VStack,
  HStack,
  Heading,
  Button,
  useBreakpointValue,
  Stack
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import DataTable from "../components/DataTable";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEvents, reset } from "../api/events/eventSlice";
import DataList from "../components/DataList";

const Events = () => {
  const isMobile = useBreakpointValue({ base: true,sm:true, md: true,lg:true })
  const { events, isSuccess} = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset()); 
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const column = [
    { heading: "", value: "imageUrl" },
    { heading: "EVENT NAME", value: "name" },
    { heading: "EVENT DATE", value: "date" },
  ];

  return (
    <VStack align="stretch" w="100%">
      <Box>
        <Heading as="h3" size="lg" p="15px"  color="teal">
          Event Overview
        </Heading>
      </Box>
      <Box>
        <Stack  direction={{ base: 'column' ,sm :'column' , md:'row'}}align="center" justify="end" mr="40px" spacing="1em">
          <Link to="/addevent">
            <Button
              colorScheme="teal"
              variant="outline"
              width="200px"
              borderRadius="50px"
            >
              ADD EVENT
            </Button>
          </Link>
        </Stack>
      </Box>
      <HStack>
        {isMobile ? <DataList data={events}/>: <DataTable column={column} data={events} showEditButton={true} />}
        
      </HStack>
    </VStack>
  );
};

export default Events;
