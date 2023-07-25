import { useState } from "react";
import "./formInput.css";
import { TextField } from '@mui/material';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      
      <TextField id="textField"
       {...inputProps}
       onChange={onChange}
       onBlur={handleFocus}
       onFocus={() =>
         inputProps.name === "confirmPassword" && setFocused(true)
       }
       focused={focused.toString()}
      />
       
    
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;