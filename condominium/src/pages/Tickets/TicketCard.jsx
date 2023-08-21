import { Card, CardContent, Typography } from "@mui/material";

const TicketCard = ({card}) => {
  const { title, description, status }=card
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="subtitle1">Status: {status}</Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;