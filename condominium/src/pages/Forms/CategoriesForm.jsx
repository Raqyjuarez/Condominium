import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleInputChange } from "../Tables/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { clean } from "@app/formSlice";
import { handleAction } from "../Tables/HelperFunctions";

const CategoriesForm = () => {
  const { values, actual, valids } = useSelector(state => state.form);
  const user = values.category;
  const valid = valids.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    handleInputChange(e, "category", dispatch);
  };

  const handleAdd = () => {
    handleAction(5, { value: 'add', document: category, actual: actual, navigate }, dispatch);
  };

  return (
    <>
      <TextField
        key="value"
        name="value"
        type="text"
        placeholder="Category"
        value={category.value}
        onChange={handleChange}
        error={!valid.value}
        helperText={!valid.value && 
          "Category should be 3-10 characters and shouldn't include any special character!"}
        required
      />
     <Button variant="contained" size="large" onClick={handleAdd}>
        {actual === "" ? "Add" : "Update"} Category 
      </Button>
    </>
  );
};

export default CategoriesForm;