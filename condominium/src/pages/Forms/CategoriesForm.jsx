import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const CategoriesForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        key="IdCategories"
        name="IdCategories"
        type="number"
        placeholder="ID"
        error={!valid.categories.IdCategories}
        helperText={!valid.categories.IdCategories && "Use only numbers"}
        required
      />
      <TextField
        key="Category"
        name="Category"
        type="text"
        placeholder="Category"
        error={!valid.categories.Category}
        helperText={!valid.categories.Category && 
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