import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Forms from "./index";

const UsersForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        key="name"
        name="name"
        type="text"
        placeholder="Name"
        error={!valid.users.name}
        helperText={
          !valid.users.name &&
          "Name should be 3-16 characters and shouldn't include any special character!"
        }
      />
      <TextField
        key="lastname"
        name="lastname"
        type="text"
        placeholder="lastname"
        error={!valid.users.lastname}
        helperText={
          !valid.users.lastname &&
          "Resident should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="email"
        name="email"
        type="email"
        placeholder="Email"
        error={!valid.users.email}
        helperText={!valid.users.email && "The email must be valid"}
        required
      />
      <TextField
        key="userPhone"
        name="userPhone"
        type="number"
        placeholder="Phone Number"
        error={!valid.users.userPhone}
        helperText={!valid.users.userPhone && "Only use numbers"}
        required
      />
      <TextField
        key="userRole"
        name="userRole"
        type="text"
        placeholder="Add User Role"
        error={!valid.users.userRole}
        helperText={!valid.users.userRole && "User Role must exist"}
        required
      />
      <Button variant="contained" size="large">
        Add User
      </Button>
    </>
  );
};

export default UsersForm;
