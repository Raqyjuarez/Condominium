import { Box, Paper } from "@mui/material";
import ResidentialForm from "./ResidentialForm";
import UsersForm from "./UsersForm";

const Forms = ({ formId }) => {
  let selectedForm;

  switch (formId) {
    case 1:
      selectedForm = <UsersForm />;
      break;
    case 2:
      selectedForm = <ResidentialForm />;
      break;
    default:
      selectedForm = <p>Invalid form id</p>;
  }

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
        {selectedForm}
      </Paper>
    </Box>
  );
};
export default Forms;
