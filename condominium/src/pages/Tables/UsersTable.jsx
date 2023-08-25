import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../app/userSlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell } from "@mui/material";

const UsersTable = () => {
  const series = useSelector((state) => state.user.usersArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const options = {
    name: "Users",
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
      <EnhancedTable
        options={options}
        tableCells={tableCells}
        series={series}
      />
    )
  );
};

export default UsersTable;
