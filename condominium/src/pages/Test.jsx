import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Test({ page }) {
  return (
    <Box>
      <Typography variant="h4">{page}</Typography>
      <Button variant='contained' color="primary">Prueba</Button>
    </Box>
  );
}
