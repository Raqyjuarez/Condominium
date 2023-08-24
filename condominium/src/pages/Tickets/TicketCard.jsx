import React from "react";
import { Card, CardContent, Typography, Divider, Icon } from "@mui/material";
import LavenderIcon from "@mui/icons-material/LocalFlorist"; // Import the Lavender icon

const TicketCard = ({ card }) => {
  const { title, description, status } = card;

  return (
    <Card
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Increased shadow
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: 1,
            display: "flex",
            alignItems: "center", // Center the icon and title
            justifyContent: "center",
          }}
        >
          <Icon
            component={LavenderIcon}
            sx={{ color: "#B57EDC", marginRight: 1 }} // Lilac purple color
          />
          {title}
        </Typography>
        <Divider sx={{ marginBottom: 2 }} /> {/* Increased space */}
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          {description}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Status: {status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
