import { Box, Grid, Typography } from "@mui/material";

const CardList = ({ title, data }) => {
  return (
    <Box
      sx={{
        bgcolor: "#FFF",
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
      <Grid container>
        {data.map((card) => (
          <Grid key={card.id} item xs={12}>
            <Box sx={{ bgcolor: "#D1C4E9", padding: 1, borderRadius: 2 }}>
              {" "}
              <Typography variant="h6">{card.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
