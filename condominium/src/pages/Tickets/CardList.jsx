import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TicketCard from "./TicketCard";

const CardList = ({ title, data }) => {
  let backgroundColor;

  if (title === "Pending") {
    backgroundColor = "#fadff2";
  } else if (title === "In review") {
    backgroundColor = "#FFFFE0"; 
  } else if (title === "Fixed") {
    backgroundColor = "#e5f8e2"; 
  }


  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius: 2,
        padding: 2,
        width: "100%",
        border: "2px dashed rgba(145, 158, 171, 0.24)",
      }}
    >
      <Typography
        variant="h4"
        color={"#2F3746"}
        sx={{ fontWeight: 600, mb: 4 }}
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {data.map((card) => (
          <Grid key={card.id} item xs={12}>
            <TicketCard card={card}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;