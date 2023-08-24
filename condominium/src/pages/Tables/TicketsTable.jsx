import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../app/ticketSlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell } from "@mui/material";

const TicketsTable = () => {
  const series = useSelector((state) => state.tickets.ticketsArray);
  console.log(series);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

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

export default TicketsTable;
