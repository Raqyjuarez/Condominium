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

const CategoriesTable = () => {
  const actual = useSelector((state) => state.form.actual);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    handleAction(5, { value: "delete", document: actual }, dispatch);
    setOpen(false);
  };

  const options = {
    name: "Categories",
    headers: ["ID", "Category"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.category.value}</TableCell>
      </>
    );
  };

  return (
    <>
      <EnhancedTable
        tableId={5}
        options={options}
        tableCells={tableCells}
        dispatch={dispatch}
        setOpen={setOpen}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>¿Want to delete this category?</DialogTitle>
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

export default CategoriesTable;
