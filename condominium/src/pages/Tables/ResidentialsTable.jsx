import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../app/userSlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell } from "@mui/material";

const UsersTable = () => {
  const series = useSelector((state) => state.residential.residentialsArray);
  console.log(series);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const options = {
    name: "Residentials",
    headers: ["ID", "Owner ID", "Resident ID", "Address", "Residential Phone"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.user.ownerId}</TableCell>
        <TableCell>{row.user.residentId}</TableCell>
        <TableCell>{row.user.address}</TableCell>
        <TableCell>{row.user.residentialPhone}</TableCell>
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
