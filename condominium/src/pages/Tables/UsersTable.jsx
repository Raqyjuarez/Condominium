import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnhancedTable from "./index";
import {
  TableCell,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Tab,
} from "@mui/material";
import { handleAction } from "./HelperFunctions";

const UsersTable = () => {
  const actual = useSelector((state) => state.form.actual);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    handleAction(1, { value: "delete", document: actual }, dispatch);
    setOpen(false);
  };

  const options = {
    name: "user",
    headers: ["ID", "Username", "Name", "Lastname", "Email", "Rol", "Phone"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.user.username}</TableCell>
        <TableCell>{row.user.name}</TableCell>
        <TableCell>{row.user.lastname}</TableCell>
        <TableCell>{row.user.email}</TableCell>
        <TableCell>{row.user.userRole}</TableCell>
        <TableCell>{row.user.userPhone}</TableCell>
      </>
    );
  };

  return (
    <>
      <EnhancedTable
        tableId={1}
        options={options}
        tableCells={tableCells}
        dispatch={dispatch}
        setOpen={setOpen}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>¿Want to delete this user?</DialogTitle>
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

export default UsersTable;
