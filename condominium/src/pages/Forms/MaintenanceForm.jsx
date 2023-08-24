import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const MaintenanceForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
         key="idMaintenance"
         name="idMaintenance"
         type="number"
         placeholder="ID"
         error={!valid.maintenance.idMaintenance}
         helperText={!valid.maintenance.idMaintenance && "Use only numbers"}
         required
      />
      <TextField
        key="maintenance"
        name="aintenance"
        type="text"
        placeholder="Maintenance"
        error={!valid.maintenance.maintenance}
        helperText={!valid.maintenance.maintenance && 
          "Maintenance should be 3-16 characters and shouldn't include any special character!"}
        required
      />
      <TextField
        key="abilityId"
        name="abilityId"
        type="number"
        placeholder="Ability ID"
        error={!valid.maintenance.abilityId}
        helperText={!valid.maintenance.abilityId && "Use only numbers"}
        required
      />
      <TextField
        key="ability"
        name="ability"
        type="text"
        placeholder="Ability"
        error={!valid.maintenance.ability}
        helperText={!valid.maintenance.ability && "Write the Ability needed without special characters"}
        required
      />
      <Button variant="contained" size="large">
        Add Maintenance
      </Button>
    </>
  );
};

export default MaintenanceForm;