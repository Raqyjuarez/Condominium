import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Forms from "./index";

const UsersForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        key="Name"
        name="Name"
        type="text"
        placeholder="Name"
        error={!valid.users.Name}
        helperText={
          !valid.users.Name &&
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
        key="Email"
        name="Email"
        type="email"
        placeholder="Email"
        error={!valid.users.Email}
        helperText={!valid.users.Email && "The email must be valid"}
        required
      />
      <TextField
        key="UserPhone"
        name="UserPhone"
        type="number"
        placeholder="Phone Number"
        error={!valid.users.UserPhone}
        helperText={!valid.users.UserPhone && "Only use numbers"}
        required
      />
      <TextField
        key="UserRole"
        name="UserRole"
        type="text"
        placeholder="Add User Role"
        error={!valid.users.UserRole}
        helperText={!valid.users.UserRole && "User Role must exist"}
        required
      />
      <Button variant="contained" size="large">
        Add User
      </Button>
    </>
  );
};

export default UsersForm;
