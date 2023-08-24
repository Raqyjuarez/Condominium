import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const CategoriesForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        key="idCategories"
        name="idCategories"
        type="number"
        placeholder="ID"
        error={!valid.categories.idCategories}
        helperText={!valid.categories.idCategories && "Use only numbers"}
        required
      />
      <TextField
        key="category"
        name="category"
        type="text"
        placeholder="Category"
        error={!valid.categories.category}
        helperText={!valid.categories.category && 
          "Category should be 3-10 characters and shouldn't include any special character!"}
        required
      />
      <Button variant="contained" size="large">
        Add Categories
      </Button>
    </>
  );
};

export default CategoriesForm;