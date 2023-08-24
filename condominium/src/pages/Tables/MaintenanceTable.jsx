import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMaintenances } from "../../app/maintenanceSlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell } from "@mui/material";

const MaintenanceTable = () => {
  const series = useSelector((state) => state.maintenances.maintenancesArray);
  console.log(series);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMaintenances());
  }, [dispatch]);

  const options = {
    name: "Maintenance",
    headers: ["ID", "Users ID", "Category ID"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.maintenance.userId}</TableCell>
        <TableCell>{row.maintenance.categoryId}</TableCell>
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

export default MaintenanceTable;
