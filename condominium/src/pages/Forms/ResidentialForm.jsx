import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const ResidentialForm = () => {
  const valid = useSelector((state) => state.form.valid);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        key="Owner"
        name="Owner"
        type="text"
        placeholder="Owner"
        error={!valid.residentials.ownerId}
        helperText={
          !valid.residentials.ownerId &&
          "Owner should be 3-16 characters and shouldn't include any special character!"
        }
      />
      <TextField
        key="Resident"
        name="Resident"
        type="text"
        placeholder="Resident"
        error={!valid.residentials.residentId}
        helperText={
          !valid.residentials.residentId &&
          "Resident should be 3-16 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="Address"
        name="Address"
        type="type"
        placeholder="Address"
        error={!valid.residentials.address}
        helperText={
          !valid.residentials.address &&
          "Address should be 10-25 characters and shouldn't include any special character!"
        }
        required
      />
      <TextField
        key="ResidentialPhone"
        name="ResidentialPhone"
        type="number"
        placeholder="Phone Number"
        error={!valid.residentials.residentialPhone}
        helperText={!valid.residentials.residentialPhone && "Only use numbers"}
        required
      />
      <Button variant="contained" size="large">
        Add Residential
      </Button>
    </>
  );
};

export default ResidentialForm;
