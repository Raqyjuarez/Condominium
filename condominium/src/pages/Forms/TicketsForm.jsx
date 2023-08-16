import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Forms from "./index";

const UsersForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <Forms formId={3}>
        <TextField
          key="IdTickets"
          name="IdTickets"
          type="number"
          placeholder="ID"
          error={!valid.tickets.IdTickets}
          helperText={!valid.tickets.IdTickets && "Use only numbers!"}
          required
        />
        <TextField
        key="Title"
        name="Title"
        type="text"
        placeholder="Title"
        error={!valid.tickets.Title}
        helperText= {!valid.tickets.Title &&
          "Title should be 3-16 characters and shouldn't include any special character!"}
          required
        />
        <TextField
          key="UserId"
          name="UserId"
          type= "text"
          placeholder="User ID"
          error={!valid.tickets.UserId}
          helperText= {!valid.tickets.UserId &&
            "Address should be 10-25 characters and shouldn't include any special character!"}
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
      </Forms>
    </>
  );
};

export default UsersForm;
