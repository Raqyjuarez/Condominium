import { Box, Grid, Typography } from "@mui/material";
import CardList from "./CardList";


const MyTickets = () => {
  const data = [
    {
      id: 1,
      title: "Grass cut",
      description: "My backyard grass is too long",
      status: "Pending",
      userId: "1",
      categoryId: "1",
      maintenanceId: "2",
    },
    {
      id: 2,
      title: "Fridge problem",
      description: "My Fridge ins't working",
      status: "In review",
      userId: "1",
      categoryId: "4",
      maintenanceId: "3",
    },
    {
      id: 3,
      title: "Bathroom",
      description: "Sink not working",
      status: "Fixed",
      userId: "2",
      categoryId: "2",
      maintenanceId: "1",
    },

    {
      id: 4,
      title: "Bathroom",
      description: "Sink not working",
      status: "Fixed",
      userId: "2",
      categoryId: "2",
      maintenanceId: "1",
    },
  ];

  const getCards = (status) => {
    const filtered = data.filter((card) => {
      if (status === "Pending") {
        return card.status === status;
      } else if (status === "In review") {
        return card.status === status;
      } else if (status === "Fixed") {
        return card.status === status;
      }
      return true;
    });
    return filtered;
  };

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
      <Grid
        container
        spacing={3}
        justifyContent="space-evenly"
        sx={{ alignSelf: "stretch" }}
      >
        <Grid item container xs={12} lg={4}>
          <CardList title='Pending' data={getCards("Pending")} />
        </Grid>
        <Grid item container xs={12} lg={4}>
          <CardList title='In review' data={getCards("In review")} />
        </Grid>
        <Grid item container xs={12} lg={4}>
          <CardList title='Fixed' data={getCards("Fixed")} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyTickets;
