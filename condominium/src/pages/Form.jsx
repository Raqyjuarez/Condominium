import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export default function Test({ page }) {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values);

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
          padding: 3,
          gap: 2,
        }}
      >
        <Typography variant="h4">Register</Typography>
        {page.map((input) => (
          <TextField
            key={input.name}
            name={input.name}
            label={input.name}
            placeholder={input.placeholder}
            // value={values[input.name]}
            onChange={handleInputChange}
          />
        ))}
        <Button variant="contained" size="large">
          Add
        </Button>
      </Paper>
    </Box>
  );
}
