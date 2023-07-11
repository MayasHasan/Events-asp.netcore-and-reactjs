import React,{useEffect} from 'react';
import { Box, VStack,HStack ,Heading  ,Button,Stack,useToast,FormLabel} from '@chakra-ui/react';
import FormikControl from "../components/FormikControl";
import { Formik } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { createCategiry ,reset } from '../api/categories/categorySlice';
import Category from './Category';
import {  toast } from 'react-toastify';

const AddCategory = () => {
  const {  isLoading, isSuccess, message ,isError} = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const initialValues={
      name: '',
    
      }
        const validationSchema = Yup.object({
          name: Yup.string()
            .min(2, 'category Name is too short!')
            .max(50, 'category Name is too long!')
            .required('Required'),
         
          })
        const onSubmit= (values) => {
          dispatch(createCategiry(values));
        }

        useEffect(() => {
          dispatch(reset());
          if (isError) {
            toast.error(message)
          }
          if (isSuccess ) {
            dispatch(reset())
            navigate("/category");
            toast.success("Category created")
          }
         
          
        }, [dispatch, isSuccess, isError, message, navigate]);
      
    return (
          <VStack align="stretch" w="100%">
            <Box>
              <Heading as="h3" size="lg" p="15px" color="teal">
               New Category
              </Heading>
            </Box>
      
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Stack as="form"  onSubmit={formik.handleSubmit}>
                  <Box ml="20px">
                    <Stack alignItems="baseline" direction={{ base: 'column' ,sm :'column' , md:'row'}} spacing={{ base: '0', md: 'lg', lg: '1xl', xl:'2xl' }}>
                      <Box w="140px">
                        <FormLabel>Category name:</FormLabel>
                      </Box>
                      <Box w={{ base: '90%',sm:"80%" , md: '80%'}}>
                        <FormikControl
                          control="input"
                          placeholder="Enter category name"
                          name="name"
                        />
                      </Box>
                    </Stack>
                   </Box>
                  <VStack align="stretch" pl={8} pt={5}>
                    <Button
                     type="submit"
                     isLoading={isLoading}
                      colorScheme="teal"
                      variant="outline"
                      width="216px"
                      borderRadius="50px"
                    >
                      SAVE CATEGORY
                    </Button>
                  </VStack>
                </Stack>
              )}
            </Formik>
          </VStack>
        );
      };

export default AddCategory;
