import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const TicketsForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        key="idTickets"
        name="idTickets"
        type="number"
        placeholder="ID"
        error={!valid.tickets.idTickets}
        helperText={!valid.tickets.idTickets && "Use only numbers!"}
        required
      />
      <TextField
        key="title"
        name="title"
        type="text"
        placeholder="Title"
        error={!valid.tickets.title}
        helperText={
          !valid.tickets.title &&
          "Title should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="userId"
        name="userId"
        type="text"
        placeholder="User ID"
        error={!valid.tickets.userId}
        helperText={
          !valid.tickets.userId &&
          "Address should be 10-25 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="categoryId"
        name="categoryId"
        type="number"
        placeholder="Category ID"
        error={!valid.tickets.categoryId}
        helperText={!valid.tickets.categoryId && "Only use numbers"}
        required
      />
      <TextField
        key="priority"
        name="priority"
        type="number"
        placeholder="Priority"
        error={!valid.tickets.priority}
        helperText={!valid.tickets.priority && "Only use numbers"}
        required
      />
      <TextField
        key="maintenanceId"
        name="maintenanceId"
        type="number"
        placeholder="Maintenance ID"
        error={!valid.tickets.maintenanceId}
        helperText={!valid.tickets.maintenanceId && "Only use numbers"}
        required
      />
      <TextField
        key="description"
        name="description"
        type="text"
        placeholder="Description"
        error={!valid.tickets.description}
        helperText={!valid.tickets.description && "Use 250 words or more"}
        required
      />
      <Button variant="contained" size="large">
        Add Ticket
      </Button>
    </>
  );
};

export default TicketsForm;
