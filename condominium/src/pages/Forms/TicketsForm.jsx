import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleInputChange } from "../Tables/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { clean } from "@app/formSlice";
import { handleAction } from "../Tables/HelperFunctions";
const TicketsForm = () => {
 const { values, actual, valids } = useSelector(state => state.form);
 const LoggedId = useSelector(state => state.actual.value.id);
  const ticket = values.ticket;
  const valid = valids.ticket;
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const handleChange = (e) => {
    handleInputChange(e, "ticket", dispatch);
  };

  const handleAdd = () => {
    const current = ({...ticket, userId: LoggedId });
    console.log(current);
    handleAction(3, { value: 'add', document: current, actual: actual, navigate }, dispatch);
  };

  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {actual === "" ? "Add" : "Update"} ticket
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
        key="title"
        name="title"
        type="text"
        placeholder="Title"
        value={ticket.title}
        onChange={handleChange}
        error={!valid.title}
        helperText={
          !valid.title &&
          "Title should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="description"
        name="description"
        type="text"
        placeholder="Description"
        value={ticket.description}
        onChange={handleChange}
        error={!valid.description}
        helperText={!valid.description && "Use 250 words or more"}
        required
      />
      {/* <TextField
        key="userId"
        name="userId"
        type="text"
        placeholder="User ID"
        value={ticket.userId}
        onChange={handleChange}
        error={!valid.userId}
        helperText={
          !valid.userId &&
          "User ID should be 10-25 characters and shouldn't include any special character!"
        }
        required
      /> */}
      <TextField
        key="categoryId"
        name="categoryId"
        type="text"
        placeholder="Category ID"
        value={ticket.categoryId}
        onChange={handleChange}
        error={!valid.categoryId}
        helperText={!valid.categoryId && "Only use numbers"}
        required
      />
      <TextField
        key="maintenanceId"
        name="maintenanceId"
        type="text"
        placeholder="Maintenance ID"
        value={ticket.maintenanceId}
        onChange={handleChange}
        error={!valid.maintenanceId}
        helperText={!valid.maintenanceId && "Only use numbers"}
        required
      />
            <TextField
        key="status"
        name="status"
        type="text"
        placeholder="status"
        value={ticket.staus}
        onChange={handleChange}
        error={!valid.status}
        helperText={!valid.status && "Select an status!"}
        required
      />
<Button variant="contained" size="large" onClick={handleAdd}>
        {actual === "" ? "Add" : "Update"} Ticket
      </Button>
    </>
  );
};

export default TicketsForm;
