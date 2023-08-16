import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Forms from "./index";

const ResidentialForm = () => {

    const valid = useSelector((state) => state.form.valid);
    const dispatch = useDispatch();

  return (
    <Forms formId={2}>
      <TextField
        key="Owner"
        name="Owner"    
        type="text"
        placeholder="Owner"
        error={!valid.residentials.Name}
        helperText={
          !valid.residentials.Name &&
          "Owner should be 3-16 characters and shouldn't include any special character!"
        }
      />
      <TextField
        key="Resident"
        name="Resident"
        type="text"
        placeholder="Resident"
        error={!valid.residentials.Resident}
        helperText={
          !valid.residentials.Resident &&
          "Resident should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="Address"
        name="Address"
        type="type"
        placeholder="Address"
        error={!valid.residentials.Address}
        helperText={!valid.residentials.Address && "Address should be 10-25 characters and shouldn't include any special character!"}
        required
      />
      <TextField
        key="ResidentialPhone"
        name="ResidentialPhone"
        type="number"
        placeholder="Phone Number"
        error={!valid.residentials.ResidentialPhone}
        helperText={!valid.residentials.ResidentialPhone && "Only use numbers"}
        required
      />
      <Button variant="contained" size="large">
          Add User
        </Button>
    </Forms>
  );
};

export default ResidentialForm;
