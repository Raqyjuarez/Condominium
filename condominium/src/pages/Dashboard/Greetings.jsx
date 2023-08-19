import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Greetings({ user }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FAFAFA",
        color: "#5E35B1",
        borderRadius: 2,
        padding: 4,
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4" color="inherit" sx={{ fontWeight: 600 }}>
          Welcome back 👋
        </Typography>
        <Typography variant="h4" color="inherit" sx={{ fontWeight: 600 }}>
          {user}
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ color: "#7E57C2", fontWeight: 400 }}>
        Optimiza tus operaciones y mantén tu inventario siempre actualizado.
      </Typography>
    </Box>
  );
}
