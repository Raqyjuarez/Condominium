import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { handleInputChange } from "../Tables/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { clean } from "@app/formSlice";
import { handleAction } from "../Tables/HelperFunctions";
import CustomSelect from "./CustomSelect";

const MaintenanceForm = () => {
  const { values, actual, valids } = useSelector((state) => state.form);
  const maintenance = values.maintenance;
  const valid = valids.maintenance;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedValue1, setSelectedValue1] = useState(maintenance.userId);
  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
    handleInputChange(event, 'maintenance', dispatch);
  };

  const [selectedValue2, setSelectedValue2] = useState(maintenance.categoryId);
  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
    handleInputChange(event, 'maintenance', dispatch);
  };

  const fetch1 = handleAction(5, { value: "fetch" }, dispatch);
  const fetch2 = handleAction(1, { value: 'fetch' }, dispatch);
  const categories = useSelector((state) => state.category.categoriesArray);
  const users = useSelector((state) => state.user.usersArray);
  useEffect(() => {
    dispatch(fetch1());
    dispatch(fetch2());
  }, [dispatch]);



  const handleChange = (e) => {
    handleInputChange(e, "maintenance", dispatch);
  };

  const handleAdd = () => {
    handleAction(
      4,
      { value: "add", document: maintenance, actual: actual, navigate },
      dispatch
    );
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {actual === "" ? "Add" : "Update"} maintenance
        </Typography>
        <Button
          variant="outlined"
          component={NavLink}
          to="/Users"
          onClick={() => dispatch(clean())}
        >
          Regresar
        </Button>
      </Box>
      {/* <TextField
        key="userId"
        name="userId"
        type="number"
        placeholder="User ID"
        value={maintenance.userId}
        onChange={handleChange}
        error={!valid.userId}
        helperText={!valid.userId && "Use only numbers"}
        required
      /> */}
      <CustomSelect
        data={users}
        label="user"
        target={["userId", "name"]}
        value={selectedValue1}
        onChange={handleSelectChange1}
      />
      {/* <TextField
        key="categoryId"
        name="categoryId"
        type="number"
        placeholder="Ability ID"
         value={maintenance.categoryId}
        onChange={handleChange}
        error={!valid.categoryId}
        helperText={!valid.categoryId && "Use only numbers"}
        required
      /> */}
      <CustomSelect
        data={categories}
        label="category"
        target={["categoryId", "value"]}
        value={selectedValue2}
        onChange={handleSelectChange2}
      />
      <Button variant="contained" size="large" onClick={handleAdd}>
        {actual === "" ? "Add" : "Update"} Maintenance
      </Button>
    </>
  );
};

export default MaintenanceForm;
