import React from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import SelectOption from './SelectOption';
import CheckboxGroups from './CheckboxGroups';
import RadioButtons from './RadioButtons';
import InputPassword from './InputPassword';

const FormikControl = (props) => {
    const {control , ...rest} = props ;
    switch(control) {
        case 'input': return <InputField {...rest}/>
        case 'password': return <InputPassword {...rest}/>
            case 'textarea': return<TextareaField {...rest}/>
                case 'select':return<SelectOption {...rest}/>
                    case 'radio':return <RadioButtons {...rest}/>
                        case 'checkbox':return<CheckboxGroups {...rest}/>
                        default : return null
    }
}

export default FormikControl;
