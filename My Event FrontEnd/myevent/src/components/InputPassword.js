import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const InputPassword = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Field
          as={Input}
          type={showPassword ? "text" : "password"}
          {...field}
          {...props}
        />

        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputPassword;
