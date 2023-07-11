import React, { useEffect } from "react";
  import {
    Flex,
    Box,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
    Spacer,
    
  } from '@chakra-ui/react';
  import { Formik } from 'formik';
     import * as Yup from 'yup';
import FormikControl from '../components/FormikControl';
import { useSelector , useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { reset ,login} from "../api/auth/authSlice";
import {  toast } from 'react-toastify';

const LogIn = () => {
const dispatch = useDispatch();
const {user , isLoading , isSuccess,isError, message} = useSelector((state) => state.auth);
const navigate = useNavigate();

useEffect(() => {
  if (isError) {
    toast.error(message)
  }
  if (isSuccess && user) {
  
    navigate("/events");
  }
  dispatch(reset());
}, [user, isSuccess, isError, message, navigate, dispatch,toast]);

  const initialValues={
    email: '',
    password: '',
  }
    const validationSchema = Yup.object({
        password: Yup.string()
        .min(2, 'Password is too short!')
        .max(50, 'Password is too long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
     
      })
    const onSubmit= (values) => {
      dispatch(login(values))
    }
    return (
      <Flex 
        minH={'89vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} pt={12} px={6}  width={[
            '100%', // 0-30em
            '100%', // 30em-48em
            '100%', // 48em-62em
            '100%', // 62em+
          ]}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl:'4xl' }}>Sign in to your account</Heading>
            <Text fontSize={{ base: 'sm', md: 'lg', lg: '1xl', xl:'2xl' }}color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box  
          
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}     
           >
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit = {onSubmit}
               
      >
              {formik =>
            <Stack spacing={4} as='form'  onSubmit={formik.handleSubmit} >
              <FormikControl
               control="input"
               type="email"
              label="Email address"
              name="email"
          />
               <FormikControl
            control="password"
            label="Password"
            name="password"
          />  
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  
                  <Link to="#" style={{color:'#4299e1'}}>Forgot password?</Link>
                </Stack>
                <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText="  Sign in"
                    colorScheme="teal"
                    variant="outline"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                  Sign in
                </Button>               
              </Stack>
              <HStack>
              <Link  to="/" style={{color:'#4299e1'}}>Back</Link>    
              <Spacer/>
              <Link  to="/register" style={{color:'#4299e1'}}>Register</Link>    
              </HStack>
            </Stack> }
            </Formik>    
          </Box>
        </Stack>
      </Flex>
    );
  }
export default LogIn;











