import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

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
        key="Lastname"
        name="Lastname"
        type="text"
        placeholder="Lastname"
        error={!valid.users.Lastname}
        helperText={
          !valid.users.Lastname &&
          "Lastname should be 3-16 characters and shouldn't include any special character!"
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
