import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Toolbar from "@mui/material/Toolbar";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";

import { setActual, clean } from "@app/formSlice";
import { deleteUser } from "@app/userSlice";
import { deleteResidential } from "@app/residentialSlice";
import { deleteTicket } from "@app/ticketSlice";
import { deleteMaintenance } from "@app/maintenanceSlice";
import { deleteCategory } from "@app/categorySlice";
import { getTarget, handleAction, handleDelete } from "./HelperFunctions";
import { useDispatch, useSelector } from "react-redux";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    options,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ ".MuiTableCell-root": { borderBottom: "none" } }}>
      <TableRow
        sx={{
          ".MuiTableCell-root": {
            bgcolor: "#F8F9FA",
            color: "#2F3746",
            fontWeight: 500,
          },
        }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all options" }}
          />
        </TableCell>
        {options.headers.map((columnId) => (
          <TableCell
            key={columnId}
            sortDirection={orderBy === columnId ? order : false}
          >
            <TableSortLabel
              active={orderBy === columnId}
              direction={orderBy === columnId ? order : "asc"}
              onClick={createSortHandler(columnId)}
              sx={{ textTransform: "uppercase" }}
            >
              {columnId}
              {orderBy === columnId ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar({
  numSelected,
  resetOrder,
  options,
  dispatch,
  setOpen,
  selected,
  setSelected
}) {
  const handleDelete = () => {
    setOpen(true);
    setSelected([]);
  };

  const handleUpdate = () => {
    handleAction(1, { value: "set", document: selected[0] }, dispatch);
  };

  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: "#7E57C2",
          color: "#FFF",
        }),
      }}
    >
      {numSelected > 0 ? (
        numSelected === 1 ? (
          <Button
            variant="outlined"
            sx={{ bgcolor: "#FFF", "&:hover": { bgcolor: "#D9D9D9" } }}
            onClick={() => handleUpdate()}
            component={NavLink}
            to="CU"
          >
            Update {options.name}
          </Button>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="subtitle1"
            component="div"
            color="inherit"
          >
            {numSelected} selected
          </Typography>
        )
      ) : (
        <Button variant="outlined" component={NavLink} to="CU">
          Add new {options.name}
        </Button>
      )}
      {numSelected === 1 ? (
        <Tooltip title="Delete">
          <IconButton color="inherit" onClick={() => handleDelete()}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Reset filter">
          <IconButton onClick={() => resetOrder("")}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const EnhancedTable = ({ options, tableCells, setOpen }) => {
  const dispatch = useDispatch();
  const fetch = handleAction(1, { value: "fetch" });

  const id = 1;
  let data;
  switch (id) {
    case 1:
      data = useSelector((state) => state.user.usersArray);
      break;
    case 2:
      data = useSelector((state) => state.residential.residentialsArray);
      break;
    case 3:
      data = useSelector((state) => state.ticket.ticketsArray);
      break;
    case 4:
      data = useSelector((state) => state.maintenance.maintenancesArray);
      break;
    case 5:
      data = useSelector((state) => state.category.categoriesArray);
  }

  React.useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(data);
      return;
    }
    setSelected([]);
    dispatch(clean());
  };

  const handleClick = (event, name) => {
    const selectedId = name.id;
    const selectedIndex = selected.findIndex((item) => item.id === selectedId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);

    if (newSelected.length === 1) {
      handleAction(1, { value: "set", document: newSelected[0] }, dispatch);
    } else dispatch(clean());
    console.log(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (row) =>
    selected.some((selectedRow) => selectedRow.id === row.id);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [data, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box
      sx={{
        minWidth: "100%",
        bgcolor: "#FFF",
        borderRadius: 2,
        border: "2px dashed rgba(145, 158, 171, 0.24)",
        overflow: "hidden",
      }}
    >
      <EnhancedTableToolbar
        numSelected={selected.length}
        resetOrder={setOrderBy}
        options={options}
        dispatch={dispatch}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      <TableContainer>
        <Table stickyHeader>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            options={options}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row);
              const labelId = `chkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  {tableCells(row)}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 65 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default EnhancedTable;
