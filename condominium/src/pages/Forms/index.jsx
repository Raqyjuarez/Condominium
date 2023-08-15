import { Box, Paper } from "@mui/material";
import UsersForm from "./UsersForm";

const Forms = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Paper
        component="form"
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          gap: 2,
          width: "75%",
          borderRadius: 2,
        }}
      >
        <UsersForm />
      </Paper>
    </Box>
  );
};

export default Forms;
