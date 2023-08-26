import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnhancedTable from "./index";
import {
  TableCell,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { handleAction } from "./HelperFunctions";

const TicketsTable = () => {
  const actual = useSelector((state) => state.form.actual);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    handleAction(3, { value: "delete", document: actual }, dispatch);
    setOpen(false);
  };

  const options = {
    name: "Tickets",
    headers: [
      "ID",
      "Title",
      "Description",
      "User ID",
      "Category ID",
      "Maintenance ID",
    ],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.ticket.title}</TableCell>
        <TableCell>{row.ticket.description}</TableCell>
        <TableCell>{row.ticket.userId}</TableCell>
        <TableCell>{row.ticket.categoryId}</TableCell>
        <TableCell>{row.ticket.maintenanceId}</TableCell>
      </>
    );
  };

  return (
    <>
      <EnhancedTable
        tableId={3}
        options={options}
        tableCells={tableCells}
        dispatch={dispatch}
        setOpen={setOpen}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>¿Want to delete this Ticket?</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleDelete()}>Delete</Button>
          <Button variant="contained" onClick={() => setOpen(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TicketsTable;
