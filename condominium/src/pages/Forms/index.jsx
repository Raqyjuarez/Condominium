import { Box, Paper } from "@mui/material";
import ResidentialForm from "./ResidentialForm";
import UsersForm from "./UsersForm";
import TicketsForm from "./TicketsForm";
import MaintenanceForm from "./MaintenanceForm";
import CategoriesForm from "./CategoriesForm";
const Forms = ({ formId }) => {
  let selectedForm;
  console.log(formId);

  switch (formId) {
    case 1:
      selectedForm = <UsersForm />;
      break;
    case 2:
      selectedForm = <ResidentialForm />;
      break;
    case 3:
      selectedForm = <TicketsForm />;
      break;
    case 4:
      selectedForm = <MaintenanceForm />;
      break;
    case 5:
      selectedForm = <CategoriesForm />;
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
        height: "100%",
        width: "100%",
      }}
    >
      <Paper
        component="form"
        elevation={2}
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
