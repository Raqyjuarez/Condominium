import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleInputChange } from "../Tables/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { clean } from "@app/formSlice";
import { handleAction } from "../Tables/HelperFunctions";

const ResidentialForm = () => {
 const { values, actual, valids } = useSelector(state => state.form);
  const residential = values.residential;
  const valid = valids.residential;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    handleInputChange(e, "residential", dispatch);
  };

  const handleAdd = () => {
    handleAction(2, { value: 'add', document: residential, actual: actual, navigate }, dispatch);
  };

  return (
    <>
     <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {actual === "" ? "Add" : "Update"} residential
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
      <TextField
        key="ownerId"
        name="ownerId"
        type="text"
        placeholder="Owner"
        value={residential.ownerId}
        onChange={handleChange}
        error={!valid.ownerId}
        helperText={
          !valid.ownerId &&
          "Owner should be 3-16 characters and shouldn't include any special character!"
        }
      />
      <TextField
        key="residentId"
        name="residentId"
        type="text"
        placeholder="Resident"
        value={residential.residentId}
        onChange={handleChange}
        error={!valid.residentId}
        helperText={
          !valid.residentId &&
          "Resident should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="address"
        name="address"
        type="type"
        placeholder="Address"
        value={residential.address}
        onChange={handleChange}
        error={!valid.address}
        helperText={
          !valid.address &&
          "Address should be 10-25 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="residentialPhone"
        name="residentialPhone"
        type="number"
        placeholder="Phone Number"
        value={residential.residentialPhone}
        onChange={handleChange}
        error={!valid.residentialPhone}
        helperText={!valid.residentialPhone && "Only use numbers"}
        required
      />
       <Button variant="contained" size="large" onClick={handleAdd}>
        {actual === "" ? "Add" : "Update"} Residential
      </Button>
    </>
  );
};

export default ResidentialForm;
