import React,{useEffect, useState} from "react";
import { Box, VStack ,Heading  ,Button,Stack,Text,FormLabel} from '@chakra-ui/react';
import FormikControl from "../components/FormikControl";
import { Formik } from "formik";
import * as Yup from "yup";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {  toast } from 'react-toastify';

import { getEvent,updatEvent, reset ,deleteEvent } from "../api/events/eventSlice";
const EditEvent = () => {
  const [isDisabled , setIsDisabled ] = useState(true);
  const { event, isLoading, isSuccess, message ,isError} = useSelector(
    (state) => state.event
  );
  let { eventID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(reset());
    dispatch(getEvent(eventID));
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      toast.success("Edit Success")
      navigate("/events");
    }
  },[isError,message,eventID,isSuccess])


  const initialValues = {
      eventID : eventID,
      name:event.name,
      price: event.price,
      artist: event.artist,
      date: event.date,
      description: event.descriotion,
  
      categoryId: event.categoryId,
    };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Event Name is too short!")
      .max(50, "Event Name is too long!")
      .required("Required"),
  });
  const onSubmit = (values) => {
    if (isDisabled) {
      setIsDisabled(!isDisabled)
    }
     else {
       dispatch(updatEvent(values));

     }
   
  };
  const handleDelete = ()=>{
    dispatch(deleteEvent(eventID));
    navigate("/events");

  }
  return (
    <VStack align="stretch" w="100%">
      <Box>
        <Heading as="h3" size="lg" p="15px" color="teal">
          Details for {event.name}
        </Heading>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize = {true}

      >
        {(formik) => (
         <Stack spacing={2} as="form" onSubmit={formik.handleSubmit} encType="multipart/form-data">
         <Box ml="15px">
        <Stack mb={{ base: '10px'}} direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
             <Box w="120px">
               <FormLabel  mb={{ base: '0px'}}>Event name:</FormLabel>
             </Box>
             <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <FormikControl
                 control="input"
                 placeholder="Enter event name"
                 name="name"
                 isDisabled ={isDisabled }
               />
             </Box>
           </Stack>
           <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline"spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
           <Box  w="120px">
               <FormLabel  mb={{ base: '0px'}}>Ticket price:</FormLabel>
             </Box>

             <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <FormikControl
                 control="input"
                 placeholder="0"
                 name="price"
                 isDisabled ={isDisabled }
               />
             </Box>
           </Stack>
           <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}}alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
             <Box w="120px">
               <FormLabel  mb={{ base: '0px'}}>Artist name:</FormLabel>
             </Box>

             <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <FormikControl
                 control="input"
                 placeholder="Enter artist"
                 name="artist"
                 isDisabled ={isDisabled }
               />
             </Box>
           </Stack>
           <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
             <Box w="120px">
               <FormLabel  mb={{ base: '0px'}}>Event date:</FormLabel>
             </Box>

             <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <FormikControl control="input" type="date" name="date"  isDisabled ={isDisabled }/>
             </Box>
           </Stack>
           <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
             <Box w="120px">
               <FormLabel  mb={{ base: '0px'}}>Description:</FormLabel>
             </Box>

             <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <FormikControl
                 control="textarea"
                 placeholder="enter description"
                 name="description"
                 isDisabled ={isDisabled }
               />
             </Box>
           </Stack>
           <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
             <Box w="120px">
               <FormLabel  mb={{ base: '0px'}}>Category:</FormLabel>
             </Box>

             <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <FormikControl
                 control="input"
                 placeholder="Enter category"
                 name="categoryId"
                 isDisabled ={isDisabled }
                
               />
             </Box>
           </Stack>
         </Box>

         {/* <Box p={{ base: '5', md: '6'}}> */}
            <VStack align="stretch" pl={8} pt={1}>
              <Button
                 type="submit"
                 isLoading={isLoading}
                colorScheme="teal"
                variant="outline"
                width="216px"
                borderRadius="50px"
              >
              {isDisabled ?"EDIT EVENT"  : "SAVE EVENT"}
              </Button>
              <Box>
                <Button 
                  colorScheme="pink"
                  variant="outline"
                  width="216px"
                  borderRadius="50px"
                  onClick={handleDelete}
                >
                  DELET EVENT
                </Button>
              </Box>
            </VStack>
          </Stack>
        )}
      </Formik>
      <Link to="/events">
        <Box alignContent="center" ml={8}>
          <Text>
            <ChevronLeftIcon /> Back to overview
          </Text>
        </Box>
      </Link>
    </VStack>
  );
};

export default EditEvent;
