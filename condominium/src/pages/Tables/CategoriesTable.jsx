import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../app/categorySlice";
import EnhancedTable from "./index";
import { Skeleton, TableCell } from "@mui/material";

const CategoriesTable = () => {
  const series = useSelector((state) => state.categories.categoriesArray);
  console.log(series);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const options = {
    name: "Categories",
    headers: ["ID", "Category"],
  };

  const tableCells = (row) => {
    return (
      <>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.category.category}</TableCell>
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

export default CategoriesTable;
