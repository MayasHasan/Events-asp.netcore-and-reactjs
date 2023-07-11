import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Radio ,
    RadioGroup 
  } from '@chakra-ui/react';
  import { Field, useField} from 'formik';
  const RadioButtons = ({label,options,...props}) => {
    const [field , meta] = useField (props);
    return (
            <FormControl isInvalid={meta.error && meta.touched} >
                <FormLabel>{label}</FormLabel>   
                <Field as={RadioGroup }  {...field}  {...props}>
                {options.map(option=>{
                        return  <Radio {...field} value={option.value}>{option.value}</Radio>
                     }
                        )}
                </Field>          
              <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
    );
}

export default RadioButtons;
