import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidentials } from "../../app/residentialSlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell } from "@mui/material";

const ResidentialsTable = ({ Toolbar }) => {
  const data = useSelector((state) => state.residential.residentialsArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResidentials());
  }, [dispatch]);

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

  if (data.length === 0) {
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
    data && (
      <>
        <Toolbar
          numSelected={selected.length}
          resetOrder={setOrderBy}
          options={options}
          dispatch={dispatch}
          setOpen={setOpen}
          selected={selected}
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
      </>
    )
  );
};

export default ResidentialsTable;
