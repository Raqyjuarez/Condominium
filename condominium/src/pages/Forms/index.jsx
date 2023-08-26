import { Box, Paper } from "@mui/material";
import ResidentialForm from "./ResidentialForm";
import UsersForm from "./UsersForm";
import TicketsForm from "./TicketsForm";
import MaintenanceForm from "./MaintenanceForm";
import CategoriesForm from "./CategoriesForm";

const Forms = ({ formId }) => {
  let selectedForm;

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
        display: 'flex',
        flexDirection: 'column',
        minWidth: "75%",
        bgcolor: "#FFF",
        padding: 4,
        gap: 2,
        borderRadius: 2,
        border: "2px dashed rgba(145, 158, 171, 0.24)",
        overflow: "hidden",
      }}
    >
      {selectedForm}
    </Box>
  );
};
export default Forms;
