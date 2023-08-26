import { Select, MenuItem, FormControl,InputLabel } from '@mui/material';

const CustomSelect = ({ data, label, target, value, onChange }) => {
  return (
    <FormControl>
      <InputLabel>Select a {label}</InputLabel>
      <Select name={target[0]} value={value} label={label} onChange={onChange}>
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item[label][target[1]]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;