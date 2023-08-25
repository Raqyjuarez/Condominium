import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSelector, handleAdd, handleInputChange } from "./helperFunctions";
import { useNavigate } from "react-router-dom";

const UsersForm = () => {
  const { values, valid, actual } = getSelector("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    handleInputChange(e, 'user', dispatch);
  }

  const handleAddTo = () => {
    handleAdd(1, values, actual, dispatch, navigate);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Agregar usuario</Typography>
        <Button variant="outlined" component={NavLink} to="/Users">
          Regresar
        </Button>
      </Box>
      <TextField
        key="name"
        name="name"
        type="text"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        error={!valid.name}
        helperText={
          !valid.name &&
          "Name should be 3-16 characters and shouldn't include any special character!"
        }
      />
      <TextField
        key="lastname"
        name="lastname"
        type="text"
        placeholder="Lastname"
        value={values.lastname}
        onChange={handleChange}
        error={!valid.lastname}
        helperText={
          !valid.lastname &&
          "Resident should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="email"
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        error={!valid.email}
        helperText={!valid.email && "The email must be valid"}
        required
      />
      <TextField
        key="userPhone"
        name="userPhone"
        type="number"
        placeholder="Phone Number"
        value={values.userPhone}
        onChange={handleChange}
        error={!valid.userPhone}
        helperText={!valid.userPhone && "Only use numbers"}
        required
      />
      <TextField
        key="userRole"
        name="userRole"
        type="text"
        placeholder="User Role"
        value={values.userRole}
        onChange={handleChange}
        error={!valid.userRole}
        helperText={!valid.userRole && "User Role must exist"}
        required
      />
      <Button variant="contained" size="large" onClick={handleAddTo}>
        Add User
      </Button>
    </>
  );
};

export default UsersForm;