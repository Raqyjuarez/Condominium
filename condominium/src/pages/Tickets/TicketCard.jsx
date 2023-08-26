import React from "react";
import { Card, CardContent, Typography, Divider, Icon } from "@mui/material";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const TicketCard = ({ card }) => {
  const { title, description, status } = card.ticket;

  return (
    <Card
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16, // Font size for title
          }}
        >
          <Icon
            component={StickyNote2Icon}
            sx={{ color: "#B57EDC", marginRight: 1, fontSize: 24 }} 
          />
          {title}
        </Typography>
        <Divider sx={{ marginBottom: 2, backgroundColor: "#eaebea" }} />
        <Typography variant="body2" sx={{ marginBottom: 1, fontSize: 14 }}>
          {description}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 1, fontSize: 14 }}> 
          Status: {status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
