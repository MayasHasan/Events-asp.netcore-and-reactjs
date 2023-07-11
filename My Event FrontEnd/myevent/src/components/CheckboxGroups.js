import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Checkbox,
    Flex,
    HStack,
  } from '@chakra-ui/react';
  import { useField} from 'formik';
  const CheckboxGroups = ({label,options,...props}) => {
    const [field , meta] = useField (props);
  
    return (
     
            <FormControl isInvalid={meta.error && meta.touched} >
                {options.map(option=>{
                  return  <Checkbox {...field} value={option.value}>{option.value}</Checkbox>
                }
                )}
                <FormLabel>{label}</FormLabel>      
                     
              <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
             
    );
}

export default CheckboxGroups;
