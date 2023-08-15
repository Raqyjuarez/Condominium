import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { setValidations } from "../app/formSlice";

export default function Test({ data }) {
  const { inputs, id } = data;
  const [values, setValues] = useState({});
  const valid = useSelector((state) => state.form.valid);
  let validations = {};

  if (id === 1) {
    validations = valid.users;
  } else if (id === 2) {
    validations = valid.residentials;
  }

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = true;

    Object.keys(values).forEach((fieldName) => {
      const fieldValue =
        typeof values[fieldName] === "string"
          ? values[fieldName].trim()
          : values[fieldName];
      const isValid = fieldValue !== "";

      dispatch(setValidations({ page: id, name: fieldName, value: isValid }));
      console.log(validations);

      if (!isValid) {
        isFormValid = false;
      }
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(values)
  // };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          gap: 2,
          width: "75%",
          borderRadius: "2%",
        }}
      >
        {inputs.map((input) => (
          <TextField {...input} onChange={handleInputChange} />
        ))}
        <Button variant="contained" size="large" onClick={handleSubmit}>
          Add
        </Button>
      </Paper>
    </Box>
  );
}
