import React, { useEffect } from "react";
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik } from "formik";
import FormikControl from "../components/FormikControl";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../api/auth/authSlice";
import {  toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message)

    }
    if (isSuccess && user) {
      toast.success("Account created")

      navigate("/events");
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Requierd"),
    lastName: Yup.string().required("Requierd"),
    userName: Yup.string().required("Requierd"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Requierd"),
  });
  const onSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Flex
      minH={"88vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} pt={20} px={6}width={[
            '100%', // 0-30em
            '100%', // 30em-48em
            '100%', // 48em-62em
            '100%', // 62em+
          ]}>
        <Stack align={"center"}>
          <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl:'4xl' }} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'lg', lg: '1xl', xl:'2xl' }} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Stack spacing={2} as="form" onSubmit={formik.handleSubmit}>
                <Flex gap="5px">
                  <Box>
                    <FormikControl
                      control="input"
                      label="First Name"
                      name="firstName"
                    
                    />
                  </Box>
                  <Box>
                    <FormikControl
                      control="input"
                      label="Last Name"
                      name="lastName"
                    />
                  </Box>
                </Flex>
                <FormikControl
                  control="input"
                  label="User Name"
                  name="userName"
                />
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

                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText="  Sign up"
                    colorScheme="teal"
                    variant="outline"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link to="/login" style={{ color: "#4299e1" }}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};
export default Register;
