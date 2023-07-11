import React, {useEffect } from "react";
import {
  Box,
  VStack,
  Heading,
  Button,
  Stack,
  Text,
  FormLabel,

} from "@chakra-ui/react";
import {  toast } from 'react-toastify';

import FormikControl from "../components/FormikControl";
import { Formik } from "formik";
import * as Yup from "yup";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createEvent, reset } from "../api/events/eventSlice";
const AddEvent = () => {
  const { isLoading, isSuccess, message ,isError} = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const initialValues = {
    name: "",
    price: "",
    artist: "",
    date: "",
    description: "",
    image: "" ,
    categoryId: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Event Name is too short!")
      .max(50, "Event Name is too long!")
      .required("Required"),
  });
  const onSubmit = (values) => {
    
     dispatch(createEvent(values));
  };
  useEffect(() => {
    if (isError) {
      toast.error(message)
  
    }
    if (isSuccess) {
      dispatch(reset())
      toast.success("Event created")
       navigate("/events");
    }
 dispatch(reset())
  }, [dispatch,isLoading,message,isSuccess,isError]);

  return (
    <VStack align="stretch" w="100%">
      <Box>
        <Heading as="h3" size="lg" p="15px" color="teal">
         New Event{" "}
        </Heading>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik =>
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
                  />
                </Box>
              </Stack>
              <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
                <Box w="120px">
                  <FormLabel  mb={{ base: '0px'}}>Event date:</FormLabel>
                </Box>

                <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
                  <FormikControl control="input" type="date" name="date" />
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
                  />
                </Box>
              </Stack>
              <Stack mb={{ base: '10px'}}  direction={{ base: 'column' ,sm :'column' , md:'row'}} alignItems="baseline" spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
                <Box w="120px">
                  <FormLabel  mb={{ base: '0px'}}>Image:</FormLabel>
                </Box>

                <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
               <input
                    placeholder="Enter image URL"
                    name="image"
                    type="file"
                    onChange={(e) =>
                      formik.setFieldValue('image', e.target.files[0])
                    }
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
                  />
                </Box>
              </Stack>
            </Box>

            <Box p={{ base: '5', md: '6'}}>
              <Button
                type="submit"
                isLoading={isLoading}
                colorScheme="teal"
                variant="outline"
                width="216px"
                borderRadius="50px"
              >
                SAVE EVENT
              </Button>
            </Box>
          </Stack>
        }
      </Formik>

      <Link to="/events">
        <Box alignContent="center" ml={5}>
          <Text>
            <ChevronLeftIcon /> Back to overview
          </Text>
        </Box>
      </Link>
    </VStack>
  );
};

export default AddEvent;
