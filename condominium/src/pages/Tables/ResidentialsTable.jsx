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

const ResidentialsTable = () => {
  const actual = useSelector((state) => state.form.actual);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    handleAction(2, { value: "delete", document: actual }, dispatch);
    setOpen(false);
  };

  const options = {
    name: "Residentials",
    headers: ["ID", "Owner ID", "Resident ID", "Address", "Residential Phone"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.residential.ownerId}</TableCell>
        <TableCell>{row.residential.residentId}</TableCell>
        <TableCell>{row.residential.address}</TableCell>
        <TableCell>{row.residential.residentialPhone}</TableCell>
      </>
    );
  };

  return (
    <>
      <EnhancedTable
        tableId={2}
        options={options}
        tableCells={tableCells}
        dispatch={dispatch}
        setOpen={setOpen}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>¿Want to delete this residential?</DialogTitle>
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

export default ResidentialsTable;
