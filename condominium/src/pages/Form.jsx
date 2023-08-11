import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export default function Test({ page }) {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };
 

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
          width: '75%',
          borderRadius: '2%'
        }}
      >
       
        {page.map((input) => (
          <TextField
           {...input}
            onChange={handleInputChange}
          />
        ))}
        <Button variant="contained" size="large" onClick = {handleSubmit}>
          Add
        </Button>
      </Paper>
    </Box>
  );
}
