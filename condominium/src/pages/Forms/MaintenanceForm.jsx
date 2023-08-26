import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleInputChange } from "../Tables/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { clean } from "@app/formSlice";
import { handleAction } from "../Tables/HelperFunctions";

const MaintenanceForm = () => {
const { values, actual, valids } = useSelector(state => state.form);
  const maintenance = values.maintenance;
  const valid = valids.maintenance;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    handleInputChange(e, "maintenance", dispatch);
  };

  const handleAdd = () => {
    handleAction(4, { value: 'add', document: maintenance, actual: actual, navigate }, dispatch);
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
      <TextField
         key="idMaintenance"
         name="idMaintenance"
         type="number"
         placeholder="ID"
          value={maintenance.idMaintenance}
        onChange={handleChange}
         error={!valid.idMaintenance}
         helperText={!valid.idMaintenance && "Use only numbers"}
         required
      />
      <TextField
        key="maintenance"
        name="maintenance"
        type="text"
        placeholder="Maintenance"
         value={maintenance.maintenance}
        onChange={handleChange}
        error={!valid.maintenance}
        helperText={!valid.maintenance && 
          "Maintenance should be 3-16 characters and shouldn't include any special character!"}
        required
      />
      <TextField
        key="abilityId"
        name="abilityId"
        type="number"
        placeholder="Ability ID"
         value={maintenance.abilityId}
        onChange={handleChange}
        error={!valid.abilityId}
        helperText={!valid.abilityId && "Use only numbers"}
        required
      />
      <TextField
        key="ability"
        name="ability"
        type="text"
        placeholder="Ability"
        value={maintenance.ability}
        onChange={handleChange}
        error={!valid.ability}
        helperText={!valid.ability && "Write the Ability needed without special characters"}
        required
      />
    <Button variant="contained" size="large" onClick={handleAdd}>
        {actual === "" ? "Add" : "Update"} Maintenance
      </Button>
    </>
  );
};

export default MaintenanceForm;