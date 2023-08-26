import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleInputChange } from "../Tables/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { clean } from "@app/formSlice";
import { handleAction } from "../Tables/HelperFunctions";

const UsersForm = () => {
  const { values, actual, valids } = useSelector(state => state.form);
  const user = values.user;
  const valid = valids.user;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    handleInputChange(e, "user", dispatch);
  };

  const handleAdd = () => {
    handleAction(1, { value: 'add', document: user, actual: actual, navigate }, dispatch);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {actual === "" ? "Add" : "Update"} user
        </Typography>
        <Button
          variant="outlined"
          component={NavLink}
          to="/Users"
          onClick={() => dispatch(clean())}
        >
          Regresar
        </Button>
      </Box>
      <TextField
        key="username"
        name="username"
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
        error={!valid.username}
        helperText={
          !valid.username &&
          "Name should be 3-16 characters and shouldn't include any special character!"
        }
      />
         <TextField
        key="password"
        name="password"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        error={!valid.password}
        helperText={
          !valid.password &&
          "Name should be 3-16 characters and shouldn't include any special character!"
        }
      />
      <TextField
        key="name"
        name="name"
        type="text"
        placeholder="Name"
        value={user.name}
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
        value={user.lastname}
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
        value={user.email}
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
        value={user.userPhone}
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
        value={user.userRole}
        onChange={handleChange}
        error={!valid.userRole}
        helperText={!valid.userRole && "User Role must exist"}
        required
      />
      <Button variant="contained" size="large" onClick={handleAdd}>
        {actual === "" ? "Add" : "Update"} User
      </Button>
    </>
  );
};

export default UsersForm;
