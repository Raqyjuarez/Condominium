import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "@app/userSlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell, Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { handleAction } from "./HelperFunctions";

const UsersTable = () => {
  const series = useSelector((state) => state.user.usersArray);
  const actual = useSelector(state => state.form.actual);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, open]);

  const handleDelete = () => {
    handleAction(1, { value: 'delete', document: actual }, dispatch)
    setOpen(false);
  };

  const options = {
    name: "user",
    headers: ["ID", "Name", "Lastname", "Email", "Rol", "Phone"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.user.name}</TableCell>
        <TableCell>{row.user.lastname}</TableCell>
        <TableCell>{row.user.email}</TableCell>
        <TableCell>{row.user.userRole}</TableCell>
        <TableCell>{row.user.userPhone}</TableCell>
      </>
    );
  };

  if (series.length === 0) {
    return (
      <>
        <Skeleton
          variant="rounded"
          animation="wave"
          width="100%"
          height={256}
        />
      </>
    );
  }

  return (
    series && (
      <>
        <EnhancedTable
          options={options}
          tableCells={tableCells}
          dispatch={dispatch}
          setOpen={setOpen}
          series={series}
        />
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>¿Want to delete this document?</DialogTitle>
          <DialogActions>
            <Button onClick={() => handleDelete()}>Delete</Button>
            <Button
              variant="contained"
              onClick={() => setOpen(false)}
              autoFocus
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
};

export default UsersTable;
