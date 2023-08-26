import PropTypes from "prop-types";
import * as React from "react";
import { visuallyHidden } from "@mui/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Box,
  TablePagination,
  TableSortLabel,
  Typography,
  TableContainer,
} from "@mui/material";
import ResidentialsTable from "./ResidentialsTable";

//#region functions
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
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar({
  numSelected,
  resetOrder,
  options,
  dispatch,
  setOpen,
  selected,
}) {
  const handleDelete = () => {
    setOpen(true);
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
      {numSelected > 0 ? (
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
//#endregion

export default function UTable({ tableId }) {
  let selectedTable;
  switch (tableId) {
    case 1:
      selectedTable = <ResidentialsTable />;
      break;
      // case 2:
      //   selectedTable = <ResidentialForm />;
      //   break;
      // case 3:
      //   selectedTable = <TicketsForm />;
      //   break;
      // case 4:
      //   selectedTable = <MaintenanceForm />;
      //   break;
      // case 5:
      //   selectedTable = <CategoriesForm />;
      break;
    default:
      selectedTable = <p>Invalid form id</p>;
  }

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
      {<selectedTable Toolbar={EnhancedTableToolbar}/>}
    </Box>
  );
}
