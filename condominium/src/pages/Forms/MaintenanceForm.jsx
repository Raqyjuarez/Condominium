import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const MaintenanceForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
         key="IdMaintenance"
         name="IdMaintenance"
         type="number"
         placeholder="ID"
         error={!valid.maintenance.IdMaintenance}
         helperText={!valid.maintenance.IdMaintenance && "Use only numbers"}
         required
      />
      <TextField
        key="Maintenance"
        name="Maintenance"
        type="text"
        placeholder="Maintenance"
        error={!valid.maintenance.Maintenance}
        helperText={!valid.maintenance.Maintenance && 
          "Maintenance should be 3-16 characters and shouldn't include any special character!"}
        required
      />
      <TextField
        key="AbilityId"
        name="AbilityId"
        type="number"
        placeholder="Ability ID"
        error={!valid.maintenance.AbilityId}
        helperText={!valid.maintenance.AbilityId && "Use only numbers"}
        required
      />
      <TextField
        key="Ability"
        name="Ability"
        type="text"
        placeholder="Ability"
        error={!valid.maintenance.Ability}
        helperText={!valid.maintenance.Ability && "Write the Ability needed without special characters"}
        required
      />
      <Button variant="contained" size="large">
        Add Maintenance
      </Button>
    </>
  );
};

export default MaintenanceForm;