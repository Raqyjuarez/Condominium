import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const TicketsForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
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
        helperText={
          !valid.tickets.Title &&
          "Title should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="UserId"
        name="UserId"
        type="text"
        placeholder="User ID"
        error={!valid.tickets.UserId}
        helperText={
          !valid.tickets.UserId &&
          "Address should be 10-25 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="CategoryId"
        name="CategoryId"
        type="number"
        placeholder="Category ID"
        error={!valid.tickets.CategoryId}
        helperText={!valid.tickets.CategoryId && "Only use numbers"}
        required
      />
      <TextField
        key="Priority"
        name="Priority"
        type="number"
        placeholder="Priority"
        error={!valid.tickets.Priority}
        helperText={!valid.tickets.Priority && "Only use numbers"}
        required
      />
      <TextField
        key="MaintenanceId"
        name="MaintenanceId"
        type="number"
        placeholder="Maintenance ID"
        error={!valid.tickets.MaintenanceId}
        helperText={!valid.tickets.MaintenanceId && "Only use numbers"}
        required
      />
      <TextField
        key="Description"
        name="Description"
        type="text"
        placeholder="Description"
        error={!valid.tickets.Description}
        helperText={!valid.tickets.Description && "Use 250 words or more"}
        required
      />
      <Button variant="contained" size="large">
        Add Ticket
      </Button>
    </>
  );
};

export default TicketsForm;
