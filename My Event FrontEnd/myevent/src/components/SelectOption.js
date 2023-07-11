import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select,
  } from '@chakra-ui/react';
  import { Field, useField} from 'formik';
  const SelectOption = ({label,options,...props}) => {
    const [field , meta] = useField (props);
    return (
            <FormControl isInvalid={meta.error && meta.touched} >
                <FormLabel>{label}</FormLabel>
                <Field as={Select}  {...field}  {...props}>
                     {options.map(option=>{
                        return <option key={option.key} value={option.value}>{option.key}</option>
                     }
                        )}
                </Field>
              <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
    );
}


export default SelectOption;
